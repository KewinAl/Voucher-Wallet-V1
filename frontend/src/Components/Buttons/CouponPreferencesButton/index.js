
import {
    PreferencesButton,
    GearIcon
} from './CouponPreferencesButton.styles'


const CouponPreferencesButton = ({filterFunction, exitFunction}) => {
    return (
        <PreferencesButton>
            <button onClick={() => filterFunction(true)}>
                Preferred Coupons
            </button>
            <button onClick={() => exitFunction(true)}>
                <GearIcon />
            </button>
        </PreferencesButton>)
}

export default CouponPreferencesButton;