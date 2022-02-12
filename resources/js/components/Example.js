import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import Lists from './Lists';
import URL from '../url';
class Example extends Component {

    constructor(props){
        super(props)
        this.state = {
            money : 0.0,
            transfers : [],
            error : null,
            form : {
                description : '',
                amount : '',
                wallet_id : 1,
            }
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    /* Cargar los datos en la carga */
    async componentDidMount(){
        try {
            let res = await fetch(URL+'wallet');
            let data = await res.json();
            this.setState({
                money : data.money,
                transfers : data.transfers,
            });
        } catch (error) {
            this.setState({
                error  
            });
        }
    }
    
    async handleSubmit(e){
        e.preventDefault();
         
        console.log('enviando.....');
        if(this.state.form.description !== ''){
            if(this.state.form.amount !== ''){
                try {
                    let config = {
                        method : 'POST',
                        headers : {
                            'Accept' : 'application/json',
                            'Content-Type' : 'application/json',
                        },
                        body : JSON.stringify(this.state.form),
                    }
                    let res = await fetch(URL+'transfer', config);
                    let data = await res.json();
                    this.setState({
                        transfers : this.state.transfers.concat(data),
                        money : this.state.money + (parseInt(data.amount)),
                    })
                    this.setState({
                        form : {
                            description : '',
                            amount : ''
                        }
                    })
                } catch (error) {
                    this.setState({
                        error  
                    });
                }
            }else console.log('Amount empty')
        }else console.log('Description empty')
        
        
    }

    handleChange(e){
        this.setState({
            form : {
                ...this.state.form,
                [e.target.name] : e.target.value,
            }
        })
    }

    render(){
        return (
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <div className="font-medium font-serif text-3xl text-center">
                        <p>S/. {this.state.money}</p>
                    </div>
                    <Form form={this.state.form} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <Lists transfers={this.state.transfers} />
                    
                </div>
            </div>
        );
    }
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
