import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../09-useContext/context/UserContext";
import { LoginPage } from "../../09-useContext/LoginPage";


describe('Pruebas en el <LoginPage />', () => {

    const user = {
        id: 1,
        name: 'Erick'
    };

    const setUserMock = jest.fn();

    test('Debe de mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage/>        
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe( 'null' );

    });

    test('Debe de llamar el setUser cuando se hace click en el boton', () => {

        render(
            <UserContext.Provider 
                value={{ user: null, setUser: setUserMock }} 
            >
                <LoginPage/>        
            </UserContext.Provider>
        );

        const buttonElement = screen.getByRole('button');
        fireEvent.click( buttonElement );

        expect( setUserMock ).toHaveBeenCalledWith({ id:123, name: 'Erick', email: 'test' });

    });
});