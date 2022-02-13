import React, { Component } from 'react';

const  Form = ({form, onChange, onSubmit}) =>{
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label className=" font-semibold text-gray-600 py-2">Description</label>
                <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                    <div className="flex">
                        <span className="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-blue-300 justify-center items-center  text-xl rounded-lg text-white">
                            <i className="fa-solid fa-pen-clip"></i>
                        </span>
                    </div>
                    <input type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 
                    relative focus:border-blue focus:shadow" placeholder="Description" name="description" value={form.description} onChange={onChange}/>
                </div>
                <label className=" font-semibold text-gray-600 py-2">Amount</label>
                <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                    <div className="flex">
                        <span className="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-blue-300 justify-center items-center  text-xl rounded-lg text-white">
                            <i className="fa-solid fa-money-bill"></i>
                        </span>
                    </div>
                    <input type="number" className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 
                    relative focus:border-blue focus:shadow" placeholder="Amount" name="amount" value={form.amount} onChange={onChange} />
                </div>
                {/* <input type="text" name="amount" value={form.amount} onChange={onChange} placeholder="ddddddddddddd"/> */}
                <input type="submit" value="Save" className='border-2 border-blue-500 rounded-lg font-bold text-blue-500 px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mr-6'/>
            </form>
        </div>
    );
}

export default Form;