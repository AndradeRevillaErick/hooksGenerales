import { render, screen } from "@testing-library/react";
import { UserContext } from "../../09-useContext/context/UserContext";
import { HomePage } from "../../09-useContext/HomePage";


describe('Pruebas en el <HomePage/>', () => {

    const user = {
        id: 1,
        name: 'Erick'
    };

    test('debe de mostrar el componente sin el usuario', () => {

        render( 
            <UserContext.Provider value={{ user: null }}>
                <HomePage/>
            </UserContext.Provider >
        );
        
        const preTag = screen.getByLabelText('pre'); //aria label
        expect( preTag.innerHTML ).toBe( 'null' );

    });

    test('debe de mostrar el componente con el usuario', () => {

        render( 
            <UserContext.Provider value={{ user: user }}>
                <HomePage/>
            </UserContext.Provider >
        );
        
        const preTag = screen.getByLabelText('pre'); //aria label
        console.log(preTag.innerHTML);
        expect( preTag.innerHTML ).toContain( user.id.toString() );
        expect( preTag.innerHTML ).toContain( user.name );

    });

});