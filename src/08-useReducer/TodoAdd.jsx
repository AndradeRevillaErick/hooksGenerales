import { useState } from "react";


export const TodoAdd = ({ handleNewTodo }) => {

    const [inputValue, setInputValue] = useState('')

    const onHandleChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();

        if( inputValue === '' ){
            return;
        }
        
        handleNewTodo({
            id: new Date().getTime(),
            description: inputValue,
            done: false
        });
    }

    return(
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Que hay que hacer?"
                className="form-control"
                value={ inputValue }
                onChange={ onHandleChange }
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