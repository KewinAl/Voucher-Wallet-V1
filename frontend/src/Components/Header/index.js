import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {clearAuth} from "../../Store/authSlice";
import {Buttons, CouponContainer, HeaderRight, MainHeader, Navbar} from "./Header.styles";
import profileLogo from "../../Assets/profileLogo.png"

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const authData = localStorage.getItem('access')

    useEffect(() => {
        if (authData) setIsLoggedIn(true);
        else setIsLoggedIn(false);
    }, [authData]);

    const handleLogout = () => {
        localStorage.removeItem('access');
        localStorage.removeItem('email')
        dispatch(clearAuth());
        setIsLoggedIn(false)
        navigate('/login')
    }

    return (
        <>
            <MainHeader>
                <CouponContainer>
                    <img src={profileLogo} alt="logo"/>
                    <h3>Voucher Wallet</h3>
                </CouponContainer>
                <HeaderRight>
                    <Navbar>
                        <ul>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/search">Search</NavLink>
                            <NavLink to="/user">Profile</NavLink>
                        </ul>
                    </Navbar>
                    <Buttons>
                        <button type="button" id="signup" onClick={() => navigate("/sign-up")}>SIGNUP</button>
                        {isLoggedIn ? <button type="button" id="logout" onClick={handleLogout}>LOGOUT</button> :
                            <button type="button" id="login" onClick={() => navigate("/sign-in")}>LOGIN</button>}
                    </Buttons>
                </HeaderRight>
            </MainHeader>
        </>
    );
};
export default Header;