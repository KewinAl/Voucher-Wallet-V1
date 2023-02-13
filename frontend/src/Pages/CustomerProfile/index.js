import {
    CouponList,
    CustomerProfileContainerPage,
    CustomerNavigation,
    NavigationContent
} from "./CustomerProfile.styles";
import Coupon from "../../Components/CouponCard/Coupon";
import {useSelector} from "react-redux";
import axios from "axios";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {setCustomerDetails} from "../../Store/customerSlice";
import {Overlay} from "./CustomerProfile.styles";


const CustomerProfile = (props) => {
    const dispatch = useDispatch()
    const token = useSelector((store) => store.auth.access)

    const first_name = useSelector((store) => store.customer.firstname)
    const last_name = useSelector((store) => store.customer.lastname)
    const gender = useSelector((store) => store.customer.gender)
    const coupons = useSelector((store) => store.customer.coupons)
    const [overlayVisibility, setOverlayVisibility] = useState(false)

    useEffect(() => {
        fetchProfile();
    }, [])

    const handleClose = (e) => {
        if (e.target.id = 'background') {
            props.exitFunction(!props.visible);
        }
    }

    const fetchProfile = () => {
        var config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://voucher-wallet.propulsion-learn.ch/backend/api/customer/2/',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            data: ''
        };

        axios(config)
            .then(function (response) {
                console.log(response.data)
                dispatch(setCustomerDetails(response.data))
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <CustomerProfileContainerPage>
            <CustomerNavigation>
                <h1>Customer Profile</h1>
                <p>{first_name} {last_name}</p>
                <button>Preferences</button>
                <button>Notifications Coupons</button>
                <button>Edit Profile</button>
                <button>Search All Coupons</button>
            </CustomerNavigation>
            <NavigationContent>
                <CouponList>
                    {coupons.map((coupon) => <Coupon coupon={coupon}/>)}
                </CouponList>
            </NavigationContent>
        </CustomerProfileContainerPage>
    )
}

export default CustomerProfile;