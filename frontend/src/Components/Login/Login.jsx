import {useState} from "react";
import {useDispatch} from "react-redux";
import {Form, useNavigate} from "react-router-dom";
import {fetchProfile, getAuthToken} from "../../API/lib/auth";
import {clearAuth, setAuth, setEmail} from "../../Store/authSlice";
import styled from "styled-components";

const ButtonLink = styled.button`
  background: none !important;
  border: none;
  padding: 0 !important;

  &:hover,
  &:focus {
    text-decoration: underline;
    color: blue;
  }

  &:active {
    color: red;
  }
`;

function Login() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState({}); //initial state = empty object {} TODO: why have this in store here?
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({...user, [e.target.id]: e.target.value});
    };

    const loginUser = async (e) => {
        e.preventDefault();
        console.log(user);
        try {
            const response = await getAuthToken(user); //user = email+password
            dispatch(setAuth(response.data));
            dispatch(setEmail(user.email));
            console.log("res.data =", response.data);
            localStorage.setItem("auth", JSON.stringify(response.data));
            localStorage.setItem("email", JSON.stringify(user.email));

            // Fetch user profile
            const profileResponse = await fetchProfile();
            //dispatch(setProfile(profileResponse.data));
            console.log("profile =", profileResponse.data);
            if (profileResponse.data) {
                navigate(
                    profileResponse.data.customer_profile
                        ? "/me"
                        : profileResponse.data.shop_profile
                            ? "/myShop"
                            : "/"
                );
            } else {
                // handle error or show message to the user
                console.log(response.data);
            }
        } catch (error) {
            console.log("error", error);
            setError(error.response.data);
        }
    };

    const handleLogout = () => {
        // reset redux auth slice
        dispatch(clearAuth());

        // remove localstorage auth string data
        localStorage.removeItem("auth");
        localStorage.removeItem("email");

        // Reset Form
        setUser({
            email: "",
            password: "",
        });
        navigate("/login");
    };

    const reset_password = () => {
        // TODO: reset password function
        navigate("/");
    };

    return (
        <>
            <div className={"LoginContainer"}>
                <Form>
                    <h1>Login</h1>
                    <div id="divider"></div>
                    <p style={{color: "red"}}>{error.detail}</p>
                    <input
                        id="email"
                        placeholder={error.email || "Email"}
                        name="email"
                        type="text"
                        value={user.email}
                        onChange={handleChange}
                        style={{marginTop: "6rem"}}
                    />
                    <input
                        id="password"
                        placeholder={error.password || "Password"}
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        style={{marginTop: "1rem"}}
                    />
                    <button type="submit" className="custom_button" onClick={loginUser}>
                        Login
                    </button>
                    <ButtonLink onClick={reset_password} id="forgot_password">
                        Forgot your password?
                    </ButtonLink>

                </Form>
            </div>
        </>
    );
}

export default Login;
