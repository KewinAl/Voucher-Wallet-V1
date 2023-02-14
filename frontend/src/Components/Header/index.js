import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { clearAuth } from "../../Store/authSlice";
import {
  AuthenticationContainer,
  HeaderContainer,
  LoginButton,
  LogoContainer,
  LogoutButton,
  MenuContainer,
  MenuItem,
  SignupButton,
} from "./Header.styles";
import logo from "../../Assets/voucherwallet-transparent.png";

const Header = () => {
  const location = useLocation();
  //console.log(location.pathname)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const authData = localStorage.getItem("auth");

  useEffect(() => {
    if (authData) setIsLoggedIn(true);
    console.log(location.pathname)
  }, [authData]);

  const handleLogout = () => {
    localStorage.clear();
    dispatch(clearAuth());
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <HeaderContainer landing={location.pathname === "/landing-page"}>
      <LogoContainer src={logo} />

      {location.pathname !== "/" && (
        <MenuContainer>
          <MenuItem to="/home">Home</MenuItem>
          <MenuItem to="/allCoupons">Coupons</MenuItem>
          <MenuItem to="/redeem">Redeem</MenuItem>
          <MenuItem to="/myShop">Create</MenuItem>
          <MenuItem to="/me">Profile</MenuItem>
        </MenuContainer>
      )}

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
  );
};
export default Header;
