import {
    OverlayDiv,
    OverlayMenu,
    CouponCreationMenu,
    CouponPreview,
    CouponCreationLeft,
    CouponCreationRight,
    NewCouponButtonsDiv,
    NewCouponButton
} from "./NewCouponOverlay.stlyes"
import Coupon from "../../Components/CouponCard/Coupon";
import {useSelector} from "react-redux";
import {useState} from "react";
import axios from "axios";

const NewCouponOverlay = (props) => {
    const [title, setTitle] = useState('')
    const [description, setdescription] = useState('')
    const [tag, setTag] = useState('')
    const [link, setLink] = useState('')
    const [redeem_limit, setredeem_limit] = useState('')
    const [discount_type, setdiscount_type] = useState('')
    const [discount, setdiscount] = useState('')
    const [currency, setcurrency] = useState('')
    const [image, setImage] = useState('')
    const [expiration_date, setexpiration_date] = useState('2024-12-31')
    const company = "whatever"
    
    
    const availableTags = useSelector((store) => store.tags.tags)

    const access = localStorage.getItem("access");
    const result = {
        "title": title,
        "description": description,
        "redeem_limit": number,
        "tag": {
            id: tag,
        },
        "expiration_date": expiration
    }
    console.log(result)

    const config = {
        method: "POST",
        url: "http://localhost:8000/backend/api/coupon/new/",
        headers: {
            'Content-Type': 'application/json',
            body: JSON.stringify(result),
            Authorization: `Bearer ${access}`,
        },
    };


    const safeCoupon = () => {
        const coupon = {
            title,
            description,
            times_used: 0,
            times_redeemed: 0,
            redeem_limit,
            discount_type,
            discount,
            currency,
            expiration_date,
        }
    }
    
    const checkIfExit = (e) => {
        if (e.target.id == "overlay") {
            props.exitFunction(!props.visible)
            setTitle('')
            setdescription('')
            setredeem_limit('')
            setTag('')
            //setLink('')
            setImage('')
            setexpiration_date('2024-12-31')
        }
    }

    return (
        <OverlayDiv id="overlay" visible={props.visible} onClick={(e) => {
            checkIfExit(e)
        }}>
            <OverlayMenu>
                <CouponCreationMenu>
                    <CouponCreationLeft>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Coupon Title"/>
                        <input value={description} onChange={(e) => setdescription(e.target.value)} placeholder="Description" />
                        <input value={redeem_limit} onChange={(e) => setredeem_limit(e.target.value)} placeholder="Number of Coupons"/>
                        <select value={discount_type} onChange={(e) => setdiscount_type(e.target.value)} >
                            <option value={''}>Type of discount</option>
                            <option value={'percent'}>Percentage</option>
                            <option value={'amount'}>Amount</option>
                        </select>
                        
                        {/* Selection for available tags */}
                        <select value={tag} onChange={(e) => setTag(e.target.value)}>
                            <option value={''}>Select a tag</option>
                            {availableTags.map((tag) => <option value={tag.id}>{tag.name}</option>)}
                        </select>

                    </CouponCreationLeft>
                    <CouponCreationRight>
                        <input type='file' onChange={(e) => setImage(e.target.files[0])} />
                        <input value={link} onChange={(e) => setLink(e.target.value)} type='text' placeholder="Shop Link" />
                        <label>Expiration Date 
                            <input value={expiration_date} onChange={(e) => setexpiration_date(e.target.value)} type={'date'} />
                        </label>
                    </CouponCreationRight>
                </CouponCreationMenu>
                <CouponPreview>
                    <h1>Preview</h1>
                    <Coupon details={{ company, title, description, link, image, expiration_date }} />
                </CouponPreview>
                <NewCouponButtonsDiv>
                    <NewCouponButton color='lightgreen' onClick={() => safeCoupon()}>Save</NewCouponButton>
                </NewCouponButtonsDiv>
            </OverlayMenu>
        </OverlayDiv>
    )

}

export default NewCouponOverlay;