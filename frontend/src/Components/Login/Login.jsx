import {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {clearAuth, setAuth, setEmail} from "./Store/authSlice.sjx";
import {getAuthToken} from '../../API/lib/auth';


function Login() {

    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState({}); //initial state = empty object {} TODO: why have this in store here?
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = e => {
        setUser({ ...user, [e.target.id]: e.target.value }); //
    };

    const loginUser = async (e) => {
        e.preventDefault()
        try {
            const response = await getAuthToken(user); //user = email+password
            dispatch(setAuth(response.data));
            dispatch(setEmail(user.email));
            //console.log("res.data =", response.data);
            localStorage.setItem("auth", JSON.stringify(response.data));
            localStorage.setItem("email", JSON.stringify(user.email));
            navigate("/");
        }catch (error) {
            setError(error.response.data);
        }
    }


    const handleLogout = () => {

        // reset redux auth slice
        dispatch(clearAuth())

        // remove localstorage auth string data
        localStorage.removeItem("auth");
        localStorage.removeItem("email");

        // Reset Form
        setUser({
            email: "",
            password: ""
        })
        navigate("/login");
    }

    const reset_password = () => {
        navigate("/");
      };


    return (
        <>
        <h1>Login</h1>
        <div id="divider"></div>
        <p style={{color: 'red'}}>{error.detail}</p>
        <input id="email" placeholder={error.email || 'Email'} name="email" type="text" value={user.email} onChange={handleChange} style={{marginTop: "6rem"}}/>
        <input id="password" placeholder={error.password || 'Password'} type="password" name="password" value={user.password} onChange={handleChange} style={{marginTop: "1rem"}}/>
        <button type="submit" className="custom_button" onClick={loginUser}>Login</button>
        <a href='#' onClick={reset_password} id="forgot_password">Forgot your password?</a>
        <a href='#' onClick={handleLogout} id="forgot_password">Logout</a>
        </>

    );
}

export default Login;
