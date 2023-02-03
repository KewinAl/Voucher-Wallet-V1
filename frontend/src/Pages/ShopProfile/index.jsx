import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCoupons, getShopProfile } from "../../API/lib/shopProfile";
import ShopProfileCard from "../../Components/ShopProfileCard";

const ShopProfile = () => {
  const [shopProfile, setShopProfile] = useState([]);
  const [coupons, setCoupons] = useState([]);

  const { shopId } = useParams();

  const handleGetShopProfile = async () => {
    try {
      const response = await getShopProfile(shopId);
      console.log("shop:", response.data);
      setShopProfile(response.data);
    } catch (e) {
      console.log("error->", e);
    }
  };
  const handleGetCoupons = async () => {
    try {
      const response = await getCoupons();
      setCoupons(response.data);
    } catch (e) {
      console.error("error:");
    }
  };

  useEffect(() => {
    handleGetShopProfile();
    //handleGetCoupons();
  }, []);

  return (
    <>
      <div>
        <h1>Your Shop Profile:</h1>
      </div>
      <ShopProfileCard shopProfileProps={shopProfile}></ShopProfileCard>
    </>
  );
};
export default ShopProfile;
