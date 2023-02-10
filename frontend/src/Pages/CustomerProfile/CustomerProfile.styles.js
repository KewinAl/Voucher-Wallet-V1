import styled from "styled-components";


export const CouponList = styled.section`
    border: solid green;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`


export const PageDiv = styled.div`
    max-height: 85%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
    justify-content: start;
    >p {
        font-size: xx-large;
        padding: 10px 0px;
    }
`;


export const CustomerMenuDiv = styled.div`
    width: 90%;
    height: 80%;
    display: flex;
    justify-content: space-between;
`
export const CustomerMenuLeft = styled.div`
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

    >p {
        font-size: xx-large;
    }

    >button {
        width: 70%;
        padding: 15px;
        border-radius: 10px;
        font-size: x-large;
    }
`

export const CustomerMenuRight = styled.div`
    width: 66%;
    height: 100%;
    overflow: hidden;
    border-radius: 0px 30px 30px;

    >div{
    width: 100%;
    height: 100%;
    padding: 10px;
    padding-bottom: 40px;
    border: 2px solid #cccccc;
    box-sizing: border-box;
    background-color: #e6e6e6;
    box-shadow: inset 7px 5px 16px -5px rgba(0,0,0,0.44);
    display: flex;
    flex-direction: column;
    gap: 40px;
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