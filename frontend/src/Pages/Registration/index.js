import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setEmail } from "../../Store/authSlice";
import { useNavigate } from "react-router-dom";
import { RegistrationForm, RegistrationPage } from "./Registration.styles";

const Registration = () => {
  const [newEmail, setNewEmail] = useState("");
  const [newWarning, setNewWarning] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setNewEmail(e.target.value);
    }
  };
  const handleRegistration = (e) => {
    e.preventDefault();

    const data = {
      email: newEmail,
    };
    axios
      .post(
        "https://luna-group2.propulsion-learn.ch/backend/api/registration/",
        data
      )
      .then((res) => {
        dispatch(setEmail(newEmail));
        navigate("/congratulations");
      })
      .catch((error) => {
        console.error(error);
        setNewWarning(error.message);
      });
  };
  return (
    <>
      <RegistrationPage>
        <RegistrationForm>
          <h2>REGISTRATION</h2>
          <hr></hr>
          <p>{newWarning}</p>
          <form onSubmit={handleRegistration}>
            <span>
              <input
                name="email"
                type="email"
                placeholder={"E-mail address"}
                value={newEmail}
                onChange={handleChange}
              />
            </span>
            <button type="submit">Register</button>
          </form>
        </RegistrationForm>
      </RegistrationPage>
    </>
  );
};
export default Registration;
