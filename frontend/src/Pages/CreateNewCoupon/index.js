import {
  CouponCreationLeft,
  CouponCreationMenu,
  CouponCreationRight,
  CouponPreview,
  NewCouponButton,
  NewCouponButtonsDiv,
  OverlayDiv,
  OverlayMenu,
} from "./NewCouponOverlay.stlyes";
import Coupon from "../../Components/CouponCard/Coupon";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";

const NewCouponOverlay = (props) => {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [number, setNumber] = useState("");
  const [tag, setTag] = useState({});
  //const [link, setLink] = useState('')
  const [image, setImage] = useState("");
  const [expiration, setexpiration] = useState("");
  const company = "whatever";
  const availableTags = useSelector((store) => store.tags.tags);

  const access = localStorage.getItem("access");
  const result = {
    title: title,
    description: description,
    redeem_limit: number,
    tag: {
      id: tag,
    },
    expiration_date: expiration,
  };

  const config = {
    method: "POST",
    url: "http://localhost:8000/backend/api/coupon/new/",
    headers: {
      "Content-Type": "application/json",
      body: JSON.stringify(result),
      Authorization: `Bearer ${access}`,
    },
  };

  const safeCoupon = () => {
    axios
      .post(config.url, {
        headers: config.headers,
        result,
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error();
      });
    props.exitFunction(!props.visible);
  };

  const checkIfExit = (e) => {
    if (e.target.id == "overlay") {
      props.exitFunction(!props.visible);
      setTitle("");
      setdescription("");
      setNumber("");
      setTag("");
      //setLink('')
      setImage("");
      setexpiration("");
    }
  };

  return (
    <OverlayDiv
      id="overlay"
      visible={props.visible}
      onClick={(e) => {
        checkIfExit(e);
      }}
    >
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
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Number of Coupons"
            />

            {/* Selection for available tags */}
            <select value={tag} onChange={(e) => setTag(e.target.value)}>
              <option value={""}>Select a tag</option>
              {availableTags.map((tag) => (
                <option value={tag.id}>{tag.name}</option>
              ))}
            </select>
          </CouponCreationLeft>
          <CouponCreationRight>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            {/*<input value={link} onChange={(e) => setLink(e.target.value)} type='text'
                               placeholder="Shop Link"/>*/}
            <label>
              Expiration Date
              <input
                value={expiration}
                onChange={(e) => setexpiration(e.target.value)}
                type={"date"}
              />
            </label>
          </CouponCreationRight>
        </CouponCreationMenu>
        <CouponPreview>
          <h1>Preview</h1>
          <Coupon
            details={{ company, title, description, tag, image, expiration }}
          />
        </CouponPreview>
        <NewCouponButtonsDiv>
          <NewCouponButton color="lightgreen" onClick={() => safeCoupon()}>
            Save
          </NewCouponButton>
        </NewCouponButtonsDiv>
      </OverlayMenu>
    </OverlayDiv>
  );
};

export default NewCouponOverlay;
