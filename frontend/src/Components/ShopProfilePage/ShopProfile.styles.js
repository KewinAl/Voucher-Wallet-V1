import styled from "styled-components";


export const PageDiv = styled.div`
    max-height: 90%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;

    >p {
        font-size: xx-large;
        padding: 10px 0px;
    }
`;
export const Menu = styled.div`
    display: flex;
    flex-direction: column; 
    width: 90%;
    max-height: 90%;
`
export const MenuLeft = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
    gap: 25px;
    >button {
        border-radius: 10px;
    }
`
export const NewCouponButton = styled.button`
    width: 30%;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    gap: 10px;
    border: solid 2px ${p => p.theme.green};
    border-radius: 5px;
    color: ${p => p.theme.green};
    background: none;
    
    &:hover {
    border: transparent solid 2px;
    background: ${p => p.theme.green};
    cursor: pointer;
    color: white;
`
export const MenuRight = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    // border-radius: 0px 30px 30px;

    >div{
    width: 100%;
    height: 100%;
    min-height: 800px;
    // border: 2px solid #cccccc;
    padding: 15px 0px;
    box-sizing: border-box;
    // background-color: #e6e6e6;
    // box-shadow: inset 7px 5px 16px -5px rgba(0,0,0,0.44);
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    overflow-y: auto;

    ::-webkit-scrollbar {
	-webkit-box-shadow: none;
	border-radius: 10px;
	background-color: none;
    width: 10px;
    }

    ::-webkit-scrollbar-thumb{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #cccccc;
    }

    ::-webkit-scrollbar-button:end:increment {
    height: 3%;
    }
    ::-webkit-scrollbar-button:start:decrement {
    height: 3%;
    }
    }
`