import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../hooks/useForm";

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Erick',
        email: 'erick@hotmail.com'
    }

    test('debe de regresar los valores por defecto', () => {

        const { result } = renderHook( () => useForm( initialForm ) );
        expect( result.current ).toEqual({
                name: initialForm.name,
                email: initialForm.email,
                onInputChange: expect.any( Function ),
                onResetForm: expect.any( Function ),
        });

    });

    test('debe de cambiar el nombre del formulario', () => {

        const newValue = {
            name: 'name',
            value: 'Juan'
        };

        const { result } = renderHook( () => useForm( initialForm ) );
        const { onInputChange } = result.current;

        act( () => {
            onInputChange({ target: newValue });
        });

        expect( result.current.name ).toBe('Juan');

    });

    test('debe de el reset del formulario', () => {

        const newValue = {
            name: 'name',
            value: 'Juan'
        };

        const { result } = renderHook( () => useForm( initialForm ) );
        const { onInputChange, onResetForm } = result.current;

        act( () => {
            onInputChange({ target: newValue });
            onResetForm();
        });

        expect( result.current ).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function ),
        });

    });


});