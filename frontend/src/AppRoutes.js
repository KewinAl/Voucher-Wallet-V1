import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Registration from "./Pages/Registration";
import Congratulations from "./Pages/Congratulations";
import Verification from "./Pages/Verification";
import Login from "./Components/Login/Login";
import Layout from "./Components/Layout";

function AppRoutes() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                {/* TODO:  Add new Routes here instead, this API allows to do some nice extra things more infos:
            https://reactrouter.com/en/main/routers/create-browser-router */}
                <Route path='/' element={<Layout/>}>
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

export default AppRoutes;
