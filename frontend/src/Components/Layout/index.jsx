import {Outlet} from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { LayoutDiv } from "./Layout.styled";


const Layout = () => {
    return (
        <LayoutDiv>
            <Header/>
            <Outlet/>
            {/* <Footer /> */}
            
        </LayoutDiv>
    )

};
export default Layout;