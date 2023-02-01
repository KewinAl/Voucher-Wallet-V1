import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {GapLines, VerificationPage, VerificationPart} from "./Verification.styles";

const Verification = () => {
const [newData, setNewData]= useState({
      Email:"",
      Username: "",
      Password:"",
      Password_repeat: "",
})
    const [newWarning, setNewWarning] = useState('');
      const navigate = useNavigate();
      const handleChange = e => {
          const changed = {};
          changed[e.target.name] = e.target.value;
          setNewData(d => ({
              ...d,
              ...changed,
          }))
      }
      const handleVerification = e => {
          e.preventDefault();
          axios.post("https://luna-group2.propulsion-learn.ch/backend/api/registration/validate/", newData).then(res => {
            navigate("/Login");
        }).catch(error => {
            console.log(error);
            setNewWarning(error.message);
        });
    }
       return (
        <>
        <VerificationPage>
          <VerificationPart>
            <h2>VERIFICATION</h2>
              <hr></hr>
            <p>{newWarning}</p>
            <form onSubmit={handleVerification}>
                 <GapLines>
                <input name="email" type="email" placeholder="E-mail address" value={newData.email} onChange={handleChange}></input>
                <input name="code" type="text" placeholder="Validation code" value={newData.code} onChange={handleChange}></input>
                </GapLines>
                <GapLines>
                <input name="username" type="text" placeholder="Username" value={newData.username} onChange={handleChange}></input>
                <input name="location" type="text" placeholder="Location" value={newData.location} onChange={handleChange}></input>
                </GapLines>
                <GapLines>
                <input name="password" type="password" placeholder="Password" value={newData.password} onChange={handleChange}></input>
                <input name="password_repeat" type="password" placeholder="Password repeat" value={newData.password_repeat} onChange={handleChange}></input>
                </GapLines>
                <button type="submit">Finish registration</button>

            </form>
            </VerificationPart>

        </VerificationPage>
        </>
    )
}

export default Verification
