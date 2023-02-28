import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {

    const { onResetForm, onInputChange, username, email, password } = useForm({
        username: '',
        email: '',
        password: '',
    });

    // const { username, email, password } = formState;

    // useEffect(() => {
    //     // console.log('El useEffect');
    // }, []);

    // useEffect(() => {
    //     // console.log('El formState changed');
    // }, [formState]);

    // useEffect(() => {
    //     // console.log('El email changed');
    // }, [email]);

    return(
        <>
            <h1>Formulario con custom Hook</h1>
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

            <input 
                type="password" 
                className="form-control mt-2"
                placeholder="Contrasena"
                name="password"
                value={ password }
                onChange={ onInputChange }
            />

            <button
                onClick={ onResetForm }
                className="btn btn-primary mt-2"
            >Borrar</button>
            
        </>
    );
}