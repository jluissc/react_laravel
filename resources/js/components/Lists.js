import React, { Component } from 'react';

const Transfers = ({transfers}) =>{
    console.log(transfers)
    return (
        <div>
            <ul>
                {
                    transfers.map(transfer => (
                        <li key={transfer.id}>
                            {transfer.description}- {transfer.amount} <hr></hr>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
export default Transfers
/* export default class Lists extends Component {

    constructor (props){
        this.state = {
            transfers : props
        }
    }
    render(){
        console.log(this.state.transfers)
        return (
            <div>
                <ul>
                    <li>11</li>
                    <li>22</li>
                    <li>33</li>
                    <li>44</li>
                </ul>
            </div>
        );
    }
} */