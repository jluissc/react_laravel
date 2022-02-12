import React, { Component } from 'react';

const  Form = ({form, onChange, onSubmit}) =>{
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name="description" value={form.description} onChange={onChange} placeholder="ddddddddddddd"/>
                <input type="text" name="amount" value={form.amount} onChange={onChange} placeholder="ddddddddddddd"/>
                <input type="submit" value="Enviar..." />
            </form>
        </div>
    );
}

export default Form;