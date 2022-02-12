import React, { Component } from 'react';

const Transfers = ({transfers}) =>{
    console.log(transfers)
    return ( 
        <div class="col-span-12">
            <div class="overflow-auto lg:overflow-visible ">
                <table class="table text-gray-400 border-separate space-y-6 text-sm">
                    <thead class="bg-gray-800 text-gray-500">
                        <tr>
                            <th class="p-3">Description</th>
                            <th class="p-3 text-left">Amount</th>
                            <th class="p-3 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        transfers.map(transfer => (                            

                            <tr class="bg-gray-800" key={transfer.id}>
                            <td class="p-3">
                                <div class="flex align-items-center">
                                    <div class="ml-3">
                                        <div class="">{transfer.description}</div>
                                    </div>
                                </div>
                            </td>
                            <td class="p-3">
                                S/. {transfer.amount}
                            </td>
                            <td class="p-3 ">
                                <a href="#" class="text-gray-400 hover:text-gray-100 mr-2">
                                    <i class="fa-solid fa-pen-to-square"></i>
                                </a>
                                <a href="#" class="text-gray-400 hover:text-gray-100  mx-2">
                                    <i class="fa-solid fa-trash-can"></i>
                                </a>
                            </td>
                            </tr>
                        ))
                        }
                        
                    </tbody>
                </table>
            </div>
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