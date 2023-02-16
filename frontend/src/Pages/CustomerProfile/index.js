import {
  CouponList,
  CustomerNavigation,
  CustomerProfileContainerPage,
  NavigationContent,
} from "./CustomerProfile.styles";
import { useDispatch, useSelector } from "react-redux";
import Coupon from "../../Components/CouponCard/Coupon";
import ProfileButton from "../../Components/Buttons/ProfileButton";
import CouponPreferencesButton from "../../Components/Buttons/CouponPreferencesButton";
import { useState } from "react";
import Overlay from "../../Components/Overlays/OverlayBase";
import TagOverlay from "../../Components/Overlays/TagOverlay";
import CustomerProfileOverlay from "../../Components/Overlays/CustomerProfileOverlay";
import tropical from "../../Assets/tropical.jpg";
import coupon1 from "../../Assets/coupon1.png";
import coupon2 from "../../Assets/coupon2.png";
import coupon3 from "../../Assets/coupon3.png";
import coupon4 from "../../Assets/coupon4.png";
import coupon5 from "../../Assets/coupon5.png";
import coupon6 from "../../Assets/coupon6.png";
import coupon7 from "../../Assets/coupon7.png";
import coupon8 from "../../Assets/coupon8.png";
import coupon9 from "../../Assets/coupon9.png";
import coupon10 from "../../Assets/coupon10.png";
import microsoftLogo from "../../Assets/companyLogo.png";

const CustomerProfile = () => {
  const dispatch = useDispatch();
  const token = useSelector((store) => store.auth.access);
  const store = useSelector((store) => store);
  const first_name = useSelector((store) => store.customer.firstname);
  const last_name = useSelector((store) => store.customer.lastname);
  const gender = useSelector((store) => store.customer.gender);
  let coupons = useSelector((store) => store.coupons.coupons); //hardcoded

  const [filterTags, setfilterTags] = useState(false);
  const [tagOverlayVisibility, setTagOverlayVisibility] = useState(false);
  const [customerOverlayVisibility, setcustomerOverlayVisibility] =
    useState(false);

  const [fakeAllCoupons, setfakeAllCoupons] = useState(false);

  for (let i = 0; i < 10; i++) {}
  const fakeCoupon = {
    id: 2,
    title: "Limited Special Offer",
    description: "Applicable after 50$",
    times_redeemed: 0,
    redeem_limit: 100,
    discount: 5,
    discount_type: "amount",
    companyLogo: "",
    background_image: tropical,
    expiration_date: "2023-12-31",
    link: "www.aldi.de",
    shop_profile: {
      id: 2,
      name: "Shop B",
    },
    tag: {
      id: 2,
      name: "Special Limited Edition",
    },
  };

  if (!Array.isArray(coupons)) {
    coupons = [coupons];
  }

  // START CHATGPT

  const tags = [
    "Food",
    "Video Games",
    "Sports",
    "Fashion",
    "Decoration",
    "Restaurants",
    "Flowers",
    "Beauty",
    "Car-Services",
    "Electronics",
    "Clothing",
    "Home and Garden",
    "Books and Magazines",
    "Travel",
    "Beauty and Personal Care",
    "Sports and Outdoors",
    "Music",
    "Movies and TV",
    "Health and Wellness",
    "Pets",
  ];

  const datasets = [
    {
      title: "50% off",
      description: "Get 50% off your purchase",
      discount: 50,
      discount_type: "percent",
      tag: "Fashion",
      background_image: coupon1,
      companyLogo: microsoftLogo,
    },
    {
      title: "10 dollars off",
      description: "Get 10 dollars off your purchase",
      discount: 10,
      discount_type: "amount",
      tag: "Electronics",
      background_image: coupon2,
      companyLogo: microsoftLogo,
    },
    {
      title: "20% off shoes",
      description: "Get 20% off any pair of shoes",
      discount: 20,
      discount_type: "percent",
      tag: "Clothing",
      background_image: coupon3,
      companyLogo: microsoftLogo,
    },
    {
      title: "Buy one, get one free",
      description: "Buy one item, get another for free",
      discount: 100,
      discount_type: "percent",
      tag: "Restaurants",
      background_image: coupon4,
      companyLogo: microsoftLogo,
    },
    {
      title: "30% off",
      description: "Get 30% off your purchase",
      discount: 30,
      discount_type: "percent",
      tag: "Sports and Outdoors",
      background_image: coupon5,
      companyLogo: microsoftLogo,
    },
    {
      title: "15 dollars off",
      description: "Get 15 dollars off your purchase",
      discount: 15,
      discount_type: "amount",
      tag: "Electronics",
      background_image: coupon6,
      companyLogo: microsoftLogo,
    },
    {
      title: "25% off jewelry",
      description: "Get 25% off any jewelry item",
      discount: 25,
      discount_type: "percent",
      tag: "Fashion",
      background_image: coupon7,
      companyLogo: microsoftLogo,
    },
    {
      title: "Free shipping",
      description: "Get free shipping on your purchase",
      discount: 100,
      discount_type: "percent",
      tag: "Electronics",
      background_image: coupon8,
      companyLogo: microsoftLogo,
    },
    {
      title: "20 dollars off",
      description: "Get 20 dollars off your purchase",
      discount: 20,
      discount_type: "amount",
      tag: "Home and Garden",
      background_image: coupon9,
      companyLogo: microsoftLogo,
    },
    {
      title: "40% off",
      description: "Get 40% off your purchase",
      discount: 40,
      discount_type: "percent",
      tag: "Beauty and Personal Care",
      background_image: coupon10,
      companyLogo: microsoftLogo,
    },
  ];

  const datasetcoupons = [];
  for (let i = 0; i < 10; i++) {
    const data = datasets[i];
    const coupon = {
      id: i + 5,
      title: data.title,
      description: data.description,
      times_redeemed: 0,
      redeem_limit: 100,
      discount: data.discount,
      discount_type: data.discount_type,
      companyLogo: data.companyLogo,
      background_image: data.background_image,
      expiration_date: "2023-12-31",
      link: "www.aldi.de",
      shop_profile: {
        id: 2,
        name: "Shop B",
      },
      tag: {
        id: tags.indexOf(data.tag) + 1,
        name: data.tag,
      },
    };
    datasetcoupons.push(coupon);
  }

  // END

  return (
    <>
      <CustomerProfileContainerPage>
        <Overlay
          visibilityCondition={tagOverlayVisibility}
          exitFunction={setTagOverlayVisibility}
        >
          <TagOverlay />
        </Overlay>
        <Overlay
          visibilityCondition={customerOverlayVisibility}
          exitFunction={setcustomerOverlayVisibility}
        >
          <CustomerProfileOverlay />
        </Overlay>

        <CustomerNavigation>
          <h1>Your Coupons</h1>
          <section>
            <CouponPreferencesButton
              exitFunction={setTagOverlayVisibility}
              filterFunction={setfakeAllCoupons}
            />
            <button onClick={() => setfakeAllCoupons(true)}>All Coupons</button>
            <ProfileButton onClick={() => setcustomerOverlayVisibility(true)} />
          </section>
        </CustomerNavigation>
        <NavigationContent>
          <CouponList>
            {coupons.map((coupon) => (
              <Coupon details={coupon} />
            ))}
            {fakeAllCoupons &&
              datasetcoupons.map((coupon) => <Coupon details={coupon} />)}
          </CouponList>
        </NavigationContent>
      </CustomerProfileContainerPage>
    </>
  );
};

export default CustomerProfile;
