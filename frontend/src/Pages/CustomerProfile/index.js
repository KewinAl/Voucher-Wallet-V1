import {
  CouponList,
  CustomerNavigation,
  CustomerProfileContainerPage,
  NavigationContent,
} from "./CustomerProfile.styles";
import styled from "styled-components";
import { RxGear } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import Coupon from "../../Components/CouponCard/Coupon";
import ProfileButton from '../../Components/Buttons/ProfileButton'
import CouponPreferencesButton from "../../Components/Buttons/CouponPreferencesButton";
import { useState } from "react";
import Overlay from "../../Components/Overlays/OverlayBase";
import TagOverlay from "../../Components/Overlays/TagOverlay";

const CustomerProfile = () => {
  const dispatch = useDispatch();
  const token = useSelector((store) => store.auth.access);
  const store = useSelector((store) => store);
  const first_name = useSelector((store) => store.customer.firstname);
  const last_name = useSelector((store) => store.customer.lastname);
  const gender = useSelector((store) => store.customer.gender);
  let coupons = useSelector((store) => store.coupons.coupons); //hardcoded

  const [tagOverlayVisibility, setTagOverlayVisibility] = useState(false)
  const [filterTags, setfilterTags] = useState(false)

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
        <Overlay visibilityCondition={tagOverlayVisibility} exitFunction={setTagOverlayVisibility}>
          <TagOverlay/>
        </Overlay>
        <CustomerNavigation>
          <h1>Your Coupons</h1>
          <section>
            <CouponPreferencesButton exitFunction={setTagOverlayVisibility} filterFunction={setfilterTags} />
            <button onClick={() => setfilterTags(false)}>All Coupons</button>
            <ProfileButton/>
          </section>
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
