import { OverlayDiv } from "./Overlay.styles";

const Overlay = ({ visibilityCondition, exitFunction, children }) => {

    const handleClose = (e) => {
        if (e.target.id = 'background') {
            exitFunction(!visibilityCondition);
        }
    }
    
    return (
        <OverlayDiv id='background' visible={visibilityCondition} onClick={(e) => handleClose(e)}>
            {children}
        </OverlayDiv>
    )

}
export default Overlay;