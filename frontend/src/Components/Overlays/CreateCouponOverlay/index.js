import {
  CouponCreationLeft,
  CouponCreationMenu,
  CouponCreationRight,
  CouponPreview,
  NewCouponButton,
  NewCouponButtonsDiv,
  OverlayMenu,
} from "./NewCouponOverlay.stlyes";
import Coupon from "../../CouponCard/Coupon";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addCoupon } from "../../../Store/couponSlice";
import microsoftLogo from "../../../Assets/companyLogo.png";

const CreateCouponOverlay = (props) => {
  const [title, setTitle] = useState("20% Off on all TV's");
  const [description, setdescription] = useState(
    "Get 20% discount on all new TVs"
  );
  const [tag, setTag] = useState({
    id: 1,
    name: "Summer Sale",
  });
  const [link, setLink] = useState("www.tv.ch");
  const [redeem_limit, setredeem_limit] = useState(30);
  const [discount_type, setdiscount_type] = useState("percent");
  const [discount, setdiscount] = useState(20);
  // const [currency, setcurrency] = useState("");
  const [image, setImage] = useState("");
  const [expiration_date, setexpiration_date] = useState("2024-12-31");
  const company = "whatever";

  const availableTags = useSelector((store) => store.tags.tags);

  // const access = localStorage.getItem("access");
  // const result = {
  //     "title": title,
  //     "description": description,
  //     "redeem_limit": number,
  //     "tag": {
  //         id: tag,
  //     },
  //     "expiration_date": expiration
  // }
  // console.log(result)

  // const config = {
  //     method: "POST",
  //     url: "http://localhost:8000/backend/api/coupon/new/",
  //     headers: {
  //         'Content-Type': 'application/json',
  //         body: JSON.stringify(result),
  //         Authorization: `Bearer ${access}`,
  //     },
  // };

  const dispatch = useDispatch();

  const safeCoupon = () => {
    const newCoupon = {
      id: 3,
      title: "20% Off on all TV's",
      description: "Get 20% discount on all new TVs",
      times_redeemed: 0,
      redeem_limit: 30,
      discount: 20,
      discount_type: "percent",
      companyLogo: microsoftLogo,
      expiration_date: "2023-06-01",
      link: "www.tv.ch",
      shop_profile: {
        id: 1,
        name: "Shop A",
      },
      tag: {
        id: 1,
        name: "Summer Sale",
      },
    };
    dispatch(addCoupon(newCoupon));
    props.exitFunction(false);
  };

  // const checkIfExit = (e) => {
  //   if (e.target.id == "overlay") {
  //     props.exitFunction(!props.visible);
  //     setTitle("");
  //     setdescription("");
  //     setredeem_limit("");
  //     setTag("");
  //     //setLink('')
  //     setImage("");
  //     setexpiration_date("2024-12-31");
  //   }
  // };

  return (
    <OverlayMenu>
      <CouponCreationMenu>
        <CouponCreationLeft>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Coupon Title"
          />
          <input
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            placeholder="Description"
          />
          <input
            value={redeem_limit}
            onChange={(e) => setredeem_limit(e.target.value)}
            placeholder="Number of Coupons"
          />
          <select
            value={discount_type}
            onChange={(e) => setdiscount_type(e.target.value)}
          >
            <option value={""}>Type of discount</option>
            <option value={"percent"}>Percentage</option>
            <option value={"amount"}>Amount</option>
          </select>
          <input
            value={discount}
            onChange={(e) => setdiscount(e.target.value)}
            placeholder="discount numerical"
          />

          {/* Selection for available tags */}
          <select value={tag} onChange={(e) => setTag(e.target.value)}>
            <option value={""}>Select a tag</option>
            {availableTags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </CouponCreationLeft>
        <CouponCreationRight>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          <input
            value={link}
            onChange={(e) => setLink(e.target.value)}
            type="text"
            placeholder="Shop Link"
          />
          <label>
            Expiration Date
            <input
              value={expiration_date}
              onChange={(e) => setexpiration_date(e.target.value)}
              type={"date"}
            />
          </label>
        </CouponCreationRight>
      </CouponCreationMenu>
      <CouponPreview>
        <h1>Preview</h1>
        <Coupon
          details={{
            company,
            title,
            description,
            link,
            image,
            expiration_date,
          }}
        />
      </CouponPreview>
      <NewCouponButtonsDiv>
        <NewCouponButton color="lightgreen" onClick={() => safeCoupon()}>
          Save
        </NewCouponButton>
      </NewCouponButtonsDiv>
    </OverlayMenu>
  );
};

export default CreateCouponOverlay;
