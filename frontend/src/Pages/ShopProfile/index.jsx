import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getShopProfile } from "../../API/lib/shopProfile";
import ShopProfileCard from "../../Components/ShopProfileCard";

const ShopProfile = () => {
  const [shopProfile, setShopProfile] = useState([]);
  const { shopId } = useParams();

  const handleGetShopProfile = async () => {
    try {
      const response = await getShopProfile(shopId);
      console.log("getShop->", response.data);
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
      <ShopProfileCard shopProfile={shopProfile}></ShopProfileCard>
    </>
  );
};
export default ShopProfile;
