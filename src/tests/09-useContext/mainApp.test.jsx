import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../09-useContext/MainApp";


describe('Pruebas en el componente <MainApp />', () => {

    test('Debe de mostrar el HomePage', () => {
        
        render( 
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>
        );

        // expect( screen.getByText('MainApp') ).toBeTruthy();
    });

    test('Debe de mostrar el LoginPage', () => {
        
        render( 
            <MemoryRouter initialEntries={['login']}>
                <MainApp/>
            </MemoryRouter>
        );

        expect( screen.getByText('LoginPage') ).toBeTruthy();
    });
});