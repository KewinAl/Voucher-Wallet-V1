import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getShopProfile } from "../../API/lib/shopProfile";
import ShopProfileCard from "../../Components/ShopProfileCard";
import CouponCard from "../../Components/CouponCard/CouponCard";

const ShopProfile = () => {
  const [shopProfile, setShopProfile] = useState([]);

  const { shopId } = useParams();

  const handleGetShopProfile = async () => {
    try {
      const response = await getShopProfile(shopId);
      console.log("fullShopData:", response.data);
      setShopProfile(response.data);
    } catch (e) {
      console.log("error->", e);
    }
  };

  useEffect(() => {
    handleGetShopProfile();
  }, []);

  return (
    <>
      <div>
        <h1>Your Shop Profile:</h1>
      </div>
      {/*TODO: */}
      <ShopProfileCard shopProfileProps={shopProfile}></ShopProfileCard>
      <div>
        {shopProfile && shopProfile.coupons_created
          ? shopProfile.coupons_created.map((coupon) => {
              return <CouponCard key={coupon.id} couponProps={coupon} />;
            })
          : null}
      </div>
    </>
  );
};
export default ShopProfile;
