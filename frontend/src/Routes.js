import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Registration from "./Pages/Registration";
import Congratulations from "./Pages/Congratulations";
import Verification from "./Pages/Verification";
import Login from "./Components/Login/Login";
import Header from "./Components/Header";
import React from "react";

function Routes() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                {/* TODO:  Add new Routes here instead, this API allows to do some nice extra things more infos:
            https://reactrouter.com/en/main/routers/create-browser-router */}
                <Route path='/' element={<Header/>}>
                    <Route path='login' element={<Login/>}/>
                    <Route path='registration' element={<Registration/>}/>
                    <Route path='congratulations' element={<Congratulations/>}/>
                    <Route path='verification' element={<Verification/>}/>
                </Route>
            </>
        )
    );

    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default Routes;
