import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {GapLines} from "../Verification/Verification.styles";
import {getMyCustomerProfile} from "../../API/lib/customerProfile";
import axios from "axios";


const EditCustomerProfile = () => {
    const [newData, SetNewData] = useState({

        FirstName: "",
        LastName: "",
        Age: "",
        Gender: "",

    })
    const [newWarning, setNewWarning] = useState('');
    const navigate = useNavigate();
    const [profile, setProfile] = useState([])

    const handleChange = e => {
        const changed = {};
        changed[e.target.name] = e.target.value;
        SetNewData(d => ({
            ...d,
            ...changed,
        }))
    }
    const handleGetMyCustomerProfile = async () => {
        try {
            const response = await getMyCustomerProfile();
            setProfile(response.data);
        } catch (e) {
            console.log("error->", e);
        }
    };

    useEffect(() => {
        handleGetMyCustomerProfile();
    }, []);

    const handleUpdateEdit = event => {
        event.preventDefault();
        axios.patch("http://localhost:8000/backend/api/me/", newData).then(res => {
            navigate("/me/");
        }).catch(error => {
            console.log(error);
            setNewWarning(error.message);
        });
    };

    return (
        <>
            <div>
                <div>
                    <h2>Edit Your Profile</h2>
                    <hr></hr>
                    <p>{newWarning}</p>
                    <form onSubmit={handleUpdateEdit}>
                        <GapLines>
                            <input name="FirstName" type="text" placeholder="FirstName" value={newData.FirstName}
                                   onChange={handleChange}></input>
                            <input name="LastName" type="text" placeholder="LastName" value={newData.LastName}
                                   onChange={handleChange}></input>
                        </GapLines>
                        <GapLines>
                            <input name="Gender" type="text" placeholder="Gender" value={newData.Gender}
                                   onChange={handleChange}></input>
                            <input name="Age" type="text" placeholder="Age" value={newData.Age}
                                   onChange={handleChange}></input>
                        </GapLines>
                        <button type="submit" onClick={handleChange}>Save</button>

                    </form>
                </div>

            </div>
        </>
    )
}

export default EditCustomerProfile;
