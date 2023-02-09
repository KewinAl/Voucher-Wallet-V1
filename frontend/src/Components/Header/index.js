import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { clearAuth } from "../../Store/authSlice"
import {
    AuthButton,
    AuthenticationContainer,
    HeaderContainer,
    LogoContainer,
    MenuContainer,
    MenuItem,
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
                <MenuItem to="/create-coupon">Create</MenuItem>
                <MenuItem to="/user">Profile</MenuItem>
            </MenuContainer>

            <AuthenticationContainer>
                {isLoggedIn ? (
                    <AuthButton onClick={handleLogout} logout>Logout</AuthButton>
                ) : (<>
                    <AuthButton onClick={() => navigate("/login")} login>
                        Login
                    </AuthButton>
                    <AuthButton onClick={() => navigate("/registration")}>
                        Signup
                    </AuthButton>
                </>)}
            </AuthenticationContainer>
        </HeaderContainer>
    )
}
export default Header
