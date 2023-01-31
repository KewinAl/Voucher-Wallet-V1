import React from 'react';
import ReactDOM from 'react-dom/client';
import rootStore from "./Store/rootStore";
import {setAuth} from "./Store/authSlice";
import {Provider} from "react-redux";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Registration from "./Pages/Registration";
import Login from "./Components/Login/Login";
import Congratulations from "./Pages/Congratulations";

const getAuthFromLocalStorage = () => {
    let authData = {}
    // Get auth data from local
    const authDataString = localStorage.getItem("auth")

    if (authDataString) { // if exists, convert to JS
        authData = JSON.parse(authDataString)
    }
    return authData // return data
}
//change the state
rootStore.dispatch(setAuth(getAuthFromLocalStorage()))

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            {/* TODO  Add new Routes here instead, this API allows to do some nice extra things more infos:
            https://reactrouter.com/en/main/routers/create-browser-router */}
            <Route path={'/'} element={<>LandingPage Placeholder</>}>
                <Route path='registration' element={<Registration/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path='registration' element={<Registration/>}/>
                <Route path='congratulations' element={<Congratulations/>}/>
            </Route>

        </>
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Provider store={rootStore}>
            <RouterProvider router={router}/>
        </Provider>

    </>
);


