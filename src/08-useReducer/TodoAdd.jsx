import { useState } from "react";
import { useForm } from "../hooks/useForm";


export const TodoAdd = ({ handleNewTodo }) => {

    const onSubmit = ( event ) => {
        event.preventDefault();

        if( description.length <=1 ) return;

        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        };
        
        handleNewTodo( newTodo );
        onResetForm();
    }

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });

    return(
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Que hay que hacer?"
                className="form-control"
                name='description'
                value={ description }
                onChange={ onInputChange }
            />

            <button 
                type="submit"
                className="btn btn-outline-primary mt-1"
            >
                Agregar
            </button>
        </form>
    );
}