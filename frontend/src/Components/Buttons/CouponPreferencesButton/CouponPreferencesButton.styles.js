import styled from "styled-components";
import { RxGear } from "react-icons/rx";


export const PreferencesButton = styled.div`
    height: 45px;
    display: flex;
    justify-content: start;
    align-items: center;
    border: solid 2px ${ p => p.theme.green};
    border-radius: 5px;
    color: ${p => p.theme.green};
    background: none;
      
    >button {
        height: 45px;
        display: flex;
        align-items: center;
        padding: 0 10px;
        border: none;
        color: ${p => p.theme.green};
        background: none;
        
        :first-child {
            border-right: solid 1px ${p => p.theme.green};
        }

        :hover {

        background: ${p => p.theme.green };
        cursor: pointer;
        color: white;
    }
`

export const GearIcon = styled(RxGear)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 20px;
`;