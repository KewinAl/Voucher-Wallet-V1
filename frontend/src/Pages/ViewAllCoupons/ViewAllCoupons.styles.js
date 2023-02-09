import styled from "styled-components";

export const AllCouponsMenuDiv = styled.div`
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const CategoryFilterButton = styled.div`
    display: flex;
    width: 80%;
    box-sizing: border-box;

    >select {
        width: 30%;
        border: 2px solid #cccccc;
        background-color: #e6e6e6;
        padding: 15px;
        border-radius: 30px 30px 0px 0px;
        font-size: large;

        :focus{
            outline: none;
        }
    }
`


export const CouponList = styled.div`
    width: 80%;
    height: 80%;
    border-radius: 0px 30px 30px;
    overflow:hidden;
    
    >div{
    width: 100%;
    height: 100%;
    border: 2px solid #cccccc;
    padding: 15px;
    box-sizing: border-box;
    padding-bottom:25px;
    background-color: #e6e6e6;
    box-shadow: inset 7px 5px 16px -5px rgba(0,0,0,0.44);
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