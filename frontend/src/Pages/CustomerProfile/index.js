import {
  CouponList,
  CustomerNavigation,
  CustomerProfileContainerPage,
  NavigationContent,
} from "./CustomerProfile.styles";
import { useDispatch, useSelector } from "react-redux";
import Coupon from "../../Components/CouponCard/Coupon";

const CustomerProfile = () => {
  const dispatch = useDispatch();
  const token = useSelector((store) => store.auth.access);
  const store = useSelector((store) => store);
  const first_name = useSelector((store) => store.customer.firstname);
  const last_name = useSelector((store) => store.customer.lastname);
  const gender = useSelector((store) => store.customer.gender);
  let coupons = useSelector((store) => store.coupons.coupons); //hardcoded
  // console.log("COUPONS:", coupons);
  // console.log("COUPONS 0:", coupons.map(coupon));

  // useEffect(() => {
  //   fetchProfile();
  // }, []);

  // const fetchProfile = () => {
  //   var config = {
  //     method: "get",
  //     maxBodyLength: Infinity,
  //     url: "https://voucher-wallet.propulsion-learn.ch/backend/api/customer/2/",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //     data: "",
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       console.log(response.data);
  //       dispatch(setCustomerDetails(response.data));
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };
  if (!Array.isArray(coupons)) {
    coupons = [coupons];
  }

  return (
    <>
      <CustomerProfileContainerPage>
        <CustomerNavigation>
          <h1>Customer Profile</h1>
          <p>
            {first_name} {last_name}
          </p>
          <button>Preferences</button>
          <button>Notifications Coupons</button>
          <button>Edit Profile</button>
          <button>Edit Profile</button>
          <button>Search All Coupons</button>
        </CustomerNavigation>
        <NavigationContent>
          <CouponList>
            {coupons.map((coupon) => (
              <Coupon details={coupon} />
            ))}
          </CouponList>
        </NavigationContent>
      </CustomerProfileContainerPage>
    </>
  );
};

export default CustomerProfile;
