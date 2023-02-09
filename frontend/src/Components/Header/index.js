import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {clearAuth} from "../../Store/authSlice";
import {Buttons, Coupon, HeaderRight, MainHeader, Navbar} from "./Header.styles";
// import profileLogo from "../../Assets/profileLogo.png"
import coupon from "../../Assets/coupon.png"

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const authData = localStorage.getItem('auth')


    useEffect(() => {
        if (authData) setIsLoggedIn(true)
        else setIsLoggedIn(false)

    }, [authData]);
    console.log(authData)


    const handleLogout = () => {
        localStorage.removeItem('auth');
        localStorage.removeItem('email')
        dispatch(clearAuth());
        setIsLoggedIn(false)
        navigate('/login')
    };

    return (
        <>
            <MainHeader>

                <Coupon>
                    <img src={coupon}/>
                    <h3>Voucher Wallet</h3>
                </Coupon>
                {/*<img src={profileLogo} alt="logo"/>*/}
                <HeaderRight>
                    <input type="text" className="Search" placeholder="Search"/>
                    <Navbar>
                        <ul>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="">Category</NavLink>
                            <NavLink to="/user">Profile</NavLink>
                        </ul>
                    </Navbar>
                    <Buttons>
                        <button type="button" id="signup" onClick={() => navigate("/registration")}>SIGNUP</button>
                        {isLoggedIn ? <button type="button" id="logout" onClick={handleLogout}>LOGOUT</button> :
                            <button type="button" id="login" onClick={() => navigate("/login")}>LOGIN</button>}


                    </Buttons>
                </HeaderRight>
            </MainHeader>
        </>
    );
};
export default Header;