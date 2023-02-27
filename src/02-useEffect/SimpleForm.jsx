import { useEffect, useState } from "react";
import { Message } from "./message";


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'erock',
        email: 'erock@google.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value,
        });
    }

    useEffect(() => {
        // console.log('El useEffect');
    }, []);

    useEffect(() => {
        // console.log('El formState changed');
    }, [formState]);

    useEffect(() => {
        // console.log('El email changed');
    }, [email]);

    return(
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />

            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="example@hotmail.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />

            {
                (username === 'erock2') && <Message/>
            }
            
        </>
    );
}