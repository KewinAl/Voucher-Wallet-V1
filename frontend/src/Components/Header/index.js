import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { clearAuth } from "../../Store/authSlice"
import {
    AuthenticationContainer,
    HeaderContainer,
    LoginButton,
    LogoContainer,
    LogoutButton,
    MenuContainer,
    MenuItem,
    SignupButton,
} from "./Header.styles"
import logo from "../../Assets/voucherwallet-transparent.png"

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const authData = localStorage.getItem("access")

    useEffect(() => {
        if (authData) setIsLoggedIn(true)
        else setIsLoggedIn(false)
    }, [authData])

    const handleLogout = () => {
        localStorage.removeItem("access")
        localStorage.removeItem("email")
        dispatch(clearAuth())
        setIsLoggedIn(false)
        navigate("/login")
    }

    return (
        <HeaderContainer>
            <LogoContainer src={logo} />

            <MenuContainer>
                <MenuItem to="/home">Home</MenuItem>
                <MenuItem to="/redeem">Redeem</MenuItem>
                <MenuItem to="/allCoupons">Coupons</MenuItem>
                <MenuItem to="/create-coupon">Create</MenuItem>
                <MenuItem to="/me">Profile</MenuItem>
            </MenuContainer>

            <AuthenticationContainer>
                {isLoggedIn ? (
                    <LogoutButton onClick={handleLogout} logout>
                        Logout
                    </LogoutButton>
                ) : (
                    <>
                        <LoginButton onClick={() => navigate("/login")} login>
                            Login
                        </LoginButton>
                        <SignupButton onClick={() => navigate("/registration")}>
                            Signup
                        </SignupButton>
                    </>
                )}
            </AuthenticationContainer>
        </HeaderContainer>
    )
}
export default Header
