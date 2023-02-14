import { useState } from "react";
import DistributeCouponOverlay from "../Overlays/DistributeOverlay";
import CouponCard_Profile from "./CouponCard/index";
import { Menu, MenuLeft, MenuRight, PageDiv } from "./ShopProfile.styles";
import CreateCouponOverlay from "../Overlays/CreateCouponOverlay";
import Overlay from "../Overlays/OverlayBase";

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
      <Overlay visibilityCondition={overlayVisibility} exitFunction={setOverlayVisibility}>
        <CreateCouponOverlay/>
      </Overlay>
      
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
            />
            {/* {coupons.map((coupon => <CouponCard_Profile coupon={coupon} toggleVisibility={setdistributionOverlayVisibility} />))} */}
          </div>
        </MenuRight>
      </Menu>
    </PageDiv>
  );
};
export default ShopProfileDiv;
