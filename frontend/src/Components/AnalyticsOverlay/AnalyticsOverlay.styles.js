import styled from "styled-components";

export const AnalyticsOverlayDiv = styled.div`
        display: ${props => props.visible ? 'flex' : 'none'};
    position: fixed; 
    width: 100vw; 
    height: 100vh; 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(23, 22, 123, 0.5); 
    align-items: center;
    justify-content: center;
    >div {
        width: 900px;
        height: 600px;
        background-color: white;
        border: 1px solid #cccccc;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding: 20px;
        h1 {
            font-size: x-large;
        }
        h2 {
            font-size: x-large;
            text-align: center;7
        }
    `

export const AnalyticsDiv = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column; 
    justify-content: space-around;
    >div {
        width: 100;
        display: flex;
        justify-content: space-between;
    }
    >div.CouponsRedeemed {
        margin-top: 50px;
        background: lightblue;
        border-radius: 25px;
        padding: 15px;
    }
    >div.UserAnalytics {
        background-color: lightgray;
        height: 50%;
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-items: space-between;
        border-radius: 15px;
        >div{
            display: flex;
            justify-content: space-between;
        }
    }
`

export const ResultsDiv = styled.div`
    display: flex;
    justify-content: space-around;
    width: 50%;
    >div {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
`

export const LocationList = styled.div`
width: 100%;
height: 100px;
overflow-y: auto;
    display: flex;
    flex-direction: column; 
    >div{
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
`