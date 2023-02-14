import { useState } from "react";
import DistributeCouponOverlay from "../DistributeCouponOverlay";
import CouponCard_Profile from "./CouponCard/index";
import { Menu, MenuLeft, MenuRight, PageDiv } from "./ShopProfile.styles";
import AnalyticsOverlay from "../../Components/AnalyticsOverlay/index";
import NewCouponOverlay from "../../Pages/CreateNewCoupon";

const ShopProfileDiv = () => {
  // const [description, setDescription] = useState("");
  // const [link, setLink] = useState("");
  // const [logo, setLogo] = useState("");
  const [name, setName] = useState("");
  const [exampleCoupons, setexampleCoupons] = useState({
    id: 1,
    title: "10% Off on all products",
    description: "Get 10% discount on all products",
    times_used: 0,
    times_redeemed: 0,
    redeem_limit: 5,
    discount_type: "percent",
    discount: 10,
    currency: "USD",
    expiration_date: "2023-06-30",
    shop_profile: {
      id: 1,
      name: "Shop A",
    },
    tag: {
      id: 1,
      name: "Summer Sale",
    },
  });

  // const coupons = useSelector((store) => store.auth.access)
  // const token = useSelector((store) => store.auth.access)
  const [overlayVisibility, setOverlayVisibility] = useState(false);
  const [distributionOverlayVisibility, setdistributionOverlayVisibility] =
    useState(false);
  const [analyticsVisibility, setanalyticsVisibility] = useState(false);

  //   useEffect(() => {
  //     getShopDetails();
  //   }, []);

  //   const getShopDetails = async () => {
  //     var config = {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     };
  //     console.log("token", token);
  //     const response = await getMyShopProfile(config); //user = email+password
  //     console.log(response);
  //     setCoupons(response.data.coupons_created);
  //     setDescription(response.data.description);
  //     setLink(response.data.link);
  //     setName(response.data.name);
  //     setLogo(response.data.shop_logo);
  //   };

  return (
    <PageDiv>
      <AnalyticsOverlay
        visible={analyticsVisibility}
        exitFunction={setanalyticsVisibility}
      />
      <NewCouponOverlay
        visible={overlayVisibility}
        exitFunction={setOverlayVisibility}
      />
      <DistributeCouponOverlay
        visible={distributionOverlayVisibility}
        exitFunction={setdistributionOverlayVisibility}
      />
      <p>{name}</p>
      <Menu>
        <MenuLeft>
          <button onClick={() => setOverlayVisibility(!overlayVisibility)}>
            Create New Coupon
          </button>
          <button>Edit Profile</button>
          <button>Delete Account</button>
        </MenuLeft>
        <MenuRight>
          <div>
            <CouponCard_Profile
              coupon={exampleCoupons}
              toggleVisibility={setdistributionOverlayVisibility}
              toggleAnalytics={setanalyticsVisibility}
            />
            {/* {coupons.map((coupon => <CouponCard_Profile coupon={coupon} toggleVisibility={setdistributionOverlayVisibility} />))} */}
          </div>
        </MenuRight>
      </Menu>
    </PageDiv>
  );
};
export default ShopProfileDiv;
