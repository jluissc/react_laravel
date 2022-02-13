import React, { Component } from 'react';

const Transfers = ({transfers}) =>{
    return (         
        <tbody>
            {
            transfers.map((transfer, index) => (                            

                <tr className="bg-gray-800" key={index}>
                    <td className="p-3" >
                        <div className="flex align-items-center">
                            <div className="ml-3">
                                <div className="">{transfer.description}</div>
                            </div>
                        </div>
                    </td>
                    <td className="p-3">
                        S/. {transfer.amount}
                    </td>
                    <td className="p-3 ">
                        <a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
                            <i className="fa-solid fa-pen-to-square"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-100  mx-2">
                            <i className="fa-solid fa-trash-can"></i>
                        </a>
                    </td>
                </tr>
            ))
            }            
        </tbody>
    );
}
export default Transfers