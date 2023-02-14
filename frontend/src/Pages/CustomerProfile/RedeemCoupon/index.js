import {OverlayDiv} from '../RedeemCoupon/RedeemCouponOverlay.styles';
import {useState} from "react";
import react from 'react';

const RedeemCouponOverlay = (props) => {
    const [code, setCode] = useState('')
    const [overlayVisibility, setOverlayVisibility] = useState(false);


    const handleClose = (e) => {
        if (e.target.id = 'background') {
            props.exitFunction(!props.visible);
        }
    }

    const checkIfExit = (e) => {
        if (e.target.id == "overlay") {
            props.exitFunction(!props.visible)
            setCode('')
        }
    }

    return (
        <OverlayDiv id='background' onClick={(e) => handleClose(e)}>

        </OverlayDiv>
    );
}


export default RedeemCouponOverlay;