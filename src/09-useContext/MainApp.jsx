import { Outlet } from "react-router-dom";


export const MainApp = () => {
    return (
        <>
            <h1>MainApp</h1>
            <hr />

            <Outlet />
        </>
    );
}