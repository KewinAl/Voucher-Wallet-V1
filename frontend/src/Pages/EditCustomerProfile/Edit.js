import {useEffect, useState} from "react";
import {getMyCustomerProfile} from "../../API/lib/customerProfile";


const EditCustomer = () => {
    const [Profile, SetProfile] = useState([])


    const handleGetMyCustomerProfile = async () => {
        try {
            const response = await getMyCustomerProfile();
            SetProfile(response.data);
        } catch (e) {
            console.log("error->", e);
        }
    };

    useEffect(() => {
        handleGetMyCustomerProfile();
    }, []);
    return (
        <>
            <div>
                <h1>your edit profile</h1>
            </div>
        </>

    );
};
export default EditCustomer