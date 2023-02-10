import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {GapLines} from "../Verification/Verification.styles";
import {getMyCustomerProfile} from "../../API/lib/customerProfile";


const EditCustomerProfile = () => {
    const [newData, SetNewData] = useState({

        FirstName: "",
        LastName: "",
        Age: "",
        Address: "",
        Location: ""


    })
    const [newWarning, SetNewWarning] = useState('');
    const navigate = useNavigate();
    const [Profile, SetProfile] = useState([])
    const handleGetMyCustomerProfile = async () => {
        try {
            const response = await getMyCustomerProfile();
            SetProfile(response.data);
            console.log(response.data)
        } catch (e) {
            console.log("error->", e);
        }
    };

    useEffect(() => {
        handleGetMyCustomerProfile();
    }, []);
    const handleChange = e => {
        const changed = {};
        changed[e.target.name] = e.target.value;
        SetNewData(d => ({
            ...d,
            ...changed,
        }))
    }
    const handleEdit = e => {
        e.preventDefault();
        axios.patch("http://localhost:8000/backend/api/me", newData).then(res => {
            navigate("/customerProfile/:customerId");
        }).catch(error => {
            console.log(error);
            SetNewWarning(error.message);
        });
    }
    return (
        <>
            <div>
                <div>
                    <h2>Edit Your Profile</h2>
                    <hr></hr>
                    <p>{newWarning}</p>
                    <form onSubmit={handleEdit}>
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
                        <GapLines>
                            <input name="Address" type="text" placeholder="Address" value={newData.Address}
                                   onChange={handleChange}></input>
                            <input name="location" type="text" placeholder="location"
                                   value={newData.location} onChange={handleChange}></input>
                        </GapLines>
                        <button type="submit" onClick={handleChange}>Finish</button>

                    </form>
                </div>

            </div>
        </>
    )
}

export default EditCustomerProfile;
