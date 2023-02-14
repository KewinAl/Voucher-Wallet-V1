import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProfile, getAuthToken } from "../../API/lib/auth";
import { setAuth, setEmail } from "../../Store/authSlice";
import { ForgotLink, LoginButton, LoginForm } from "./login.style";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await getAuthToken(user);
      console.log("getAuthToken:", response);
      dispatch(setAuth(response.data));
      dispatch(setEmail(user.email));
      localStorage.setItem("auth", JSON.stringify(response.data));
      localStorage.setItem("email", JSON.stringify(user.email));
      try {
        const profileResponse = await fetchProfile();
        console.log("profileResponse", profileResponse.data);
        if (profileResponse.data) {
          navigate(
            profileResponse.data.customer_profile
              ? "/me"
              : profileResponse.data.shop_profile
              ? "/myShop"
              : "/"
          );
        } else {
          console.log("No User Profile");
        }
      } catch (e) {
        console.error(e);
      }
    } catch (error) {
      setError(error.response.data);
    }
  };

  const reset_password = () => {
    // TODO: reset password function
    navigate("/");
  };

  return (
    <LoginForm>
      <h1>Hello, Again</h1>
      <h2>Let's redeem or create coupons!</h2>
      <input
        id="email"
        placeholder="Enter your email ..."
        name="email"
        type="text"
        value={user.email}
        onChange={handleChange}
      />
      <input
        id="password"
        placeholder="Enter your password ..."
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
      />
      <LoginButton type="submit" className="custom_button" onClick={loginUser}>
        Login
      </LoginButton>
      <ForgotLink onClick={reset_password} id="forgot_password">
        Forgot your password?
      </ForgotLink>

      <p style={{ color: "red" }}>{error.detail}</p>
    </LoginForm>
  );
}

export default Login;
