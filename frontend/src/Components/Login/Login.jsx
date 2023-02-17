import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProfile, getAuthToken } from "../../API/lib/auth";
import { setAuth, setEmail } from "../../Store/authSlice";
import { ForgotLink, LoginButton, LoginForm } from "./login.style";
import microsoftLogo from "../../Assets/companyLogo.png";
import tropical from "../../Assets/tropical.jpg";
import aldiLogo from "../../Assets/AldiLogo.png";
import background2 from "../../Assets/couponPic1.jpg";
import { addCoupon } from "../../Store/couponSlice";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const coupons = useSelector((store) => store.coupons.coupons);
  let coupon1 = {
    id: 1,
    title: "10% Off on all products",
    description: "Get 10% discount",
    times_redeemed: 14,
    redeem_limit: 28,
    discount: 10,
    discount_type: "percent",
    companyLogo: microsoftLogo,
    background_image: tropical,
    expiration_date: "2023-06-30",
    link: "www.cats.ch",
    shop_profile: {
      id: 1,
      name: "Shop A",
    },
    tag: {
      id: 1,
      name: "Summer Sale",
    },
    analytics: {
      averageAge: 45,
      male: 10,
      female: 80,
      other: 10,
      zurich: 60,
      basel: 15,
      bern: 25,
    },
  };
  let coupon2 = {
    id: 2,
    title: "Limited Special Offer",
    description: "Applicable after 50$",
    times_redeemed: 20,
    redeem_limit: 40,
    discount: 5,
    discount_type: "amount",
    companyLogo: aldiLogo,
    background_image: background2,
    expiration_date: "2023-12-31",
    link: "www.aldi.de",
    shop_profile: {
      id: 2,
      name: "Shop B",
    },
    tag: {
      id: 2,
      name: "Special Limited Edition",
    },
    analytics: {
      averageAge: 21,
      male: 90,
      female: 8,
      other: 2,
      zurich: 87,
      basel: 12,
      bern: 1,
    },
  };

  const addCouponsIfNotExist = () => {
    if (!coupons.some((coupon) => coupon.id === coupon1.id)) {
      dispatch(addCoupon(coupon1));
    }
    if (!coupons.some((coupon) => coupon.id === coupon2.id)) {
      dispatch(addCoupon(coupon2));
    }
  };

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
      addCouponsIfNotExist();
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
