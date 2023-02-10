import {useState} from "react";
import {getCustomerProfile} from "../../API/lib/edit";
import {useParams} from "react-router-dom";


const EditCustomer = () => {
    const [Profile, SetProfile] = useState([])
    const {customerId} = useParams()


    const handleGetEditProfile = async () => {
        try {
            const response = await getCustomerProfile(customerId);
            console.log("fullData:", response.data);
            SetProfile(response.data);
        } catch (e) {
            console.log("error->", e);
        }
    };
    return (
        <>
            <div>
                <h1>your edit profile</h1>
            </div>
        </>

    );
};
export default EditCustomer