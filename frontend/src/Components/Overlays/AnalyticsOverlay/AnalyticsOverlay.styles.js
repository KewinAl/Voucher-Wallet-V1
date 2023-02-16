import styled from "styled-components";

export const AnalyticsOverlayDiv = styled.div`
  width: 900px;
  height: 600px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  border-radius: 25px;


  h1 {
    font-size: x-large;
    color: #06C076;

  }

  h2 {
    font-size: x-large;
    text-align: center;
    color: white;
    border: 2px solid #522fbc;
    border-radius: 25px;
    background-color: #522fbc;
    padding: 10px;

  }
`

export const AnalyticsDiv = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  > div {
    width: 100;
    display: flex;
    justify-content: space-between;
    color: black;

  }


  > div.CouponsRedeemed {
    margin-top: 50px;
    background: white;
    border-radius: 25px;
    padding: 15px;
  }

  > div.UserAnalytics {
    background-color: white;
    height: 50%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-items: space-between;
    border-radius: 15px;
    border: 2px solid black;


    > div {
      display: flex;
      justify-content: space-between;
    }
  }
`

export const ResultsDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;

  > div {
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


  > div {
    width: 100%;
    display: flex;
    justify-content: space-around;

  }
`