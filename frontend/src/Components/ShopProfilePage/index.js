import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getMyShopProfile } from "../../API/lib/shopProfile"
import NewCouponOverlay from "../../Pages/CreateNewCoupon"
import DistributeCouponOverlay from "../DistributeCouponOverlay"
import CouponCard_Profile from "./CouponCard/index"
import { PageDiv, Menu, MenuLeft, MenuRight } from "./ShopProfile.styles"


const ShopProfileDiv = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [link, setLink] = useState('')
    const [logo, setLogo] = useState('')
    const [coupons, setCoupons] = useState([])

    const token = useSelector((store) => store.auth.access)
    const [overlayVisibility, setOverlayVisibility] = useState(false)
    const [distributionOverlayVisibility, setdistributionOverlayVisibility] = useState(true)

    useEffect(() => {
        getShopDetails()
    },[])   

    const getShopDetails = async () => {
        var config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        const response = await getMyShopProfile(config); //user = email+password
        console.log(response)
        setCoupons(response.data.coupons_created)
        setDescription(response.data.description)
        setLink(response.data.link)
        setName(response.data.name)
        setLogo(response.data.shop_logo)

    }


    return (
        <PageDiv>
            <NewCouponOverlay visible={overlayVisibility} exitFunction={setOverlayVisibility} />
            <DistributeCouponOverlay visible={distributionOverlayVisibility} exitFunction={setdistributionOverlayVisibility} />
            <p>{name}</p>
            <Menu>
                <MenuLeft>
                    <button onClick={() => setOverlayVisibility(!overlayVisibility)}>Create New Coupon</button>
                    <button>Edit Profile</button>
                    <button>Delete Account</button>
                </MenuLeft>
                <MenuRight>
                    <div>
                        {coupons.map((coupon => <CouponCard_Profile coupon={coupon} toggleVisibility={setdistributionOverlayVisibility} />))}
                    </div>
                </MenuRight>
            </Menu>
            
        </PageDiv>
    )
}
export default ShopProfileDiv