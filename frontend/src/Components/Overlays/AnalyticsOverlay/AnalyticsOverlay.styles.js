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
    color: black;
  }

  h2 {
    font-size: x-large;
    text-align: center;
    color: black;
    //border: 2px solid #522fbc;
    //border-radius: 25px;
    //background-color: #522fbc;
    //padding: 10px;
  }
`;

export const AnalyticsDiv = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: black;
  }

  > div.CouponsRedeemed {
    margin-top: 50px;
    background: white;
    border-radius: 25px;
    padding: 15px;
    position: relative;
    z-index: 1;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: ${(props) => props.percentage}%;
      height: 100%;
      background-color: #f00;
      border-radius: 15px;
      z-index: 2;
    }

    .Percentage {
      position: absolute;
      top: 0%;
      left: 0;
      //text-align: left;
      transform: translate(150%, -7%);
      z-index: 3;
      font-size: 1.2rem;
      font-weight: bold;
    }

    //.Redeemed {
    //  position: absolute;
    //  top: 50%;
    //  left: 50%;
    //  transform: translate(+50%, -50%);
    //  z-index: 3;
    //}

    .Redeemed {
      font-size: 1rem;
    }

    > div {
      position: relative;
      width: 60%;
      height: 25px;
      background-color: #06c076;
      border-radius: 15px;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        background-color: red;
        border-radius: 10px;
        z-index: 2;
      }
    }
  }

  > div.UserAnalytics {
    background-color: white;
    height: 50%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    //justify-items: space-between;
    border-radius: 15px;
    border: 2px solid black;

    > div {
      display: flex;
      justify-content: space-between;
    }
  }

  .GenderAnalytics {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .PieChart {
      width: 150px;
      height: 150px;
    }

    .GenderLegend {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 5px;
      width: 100%;

      .GenderLegendBox {
        width: 10px;
        height: 10px;
        margin-right: 5px;
        border-radius: 2px;
      }

      .MaleSlice {
        background-color: #06c076;
      }

      .FemaleSlice {
        background-color: #522fbc;
      }

      .OtherSlice {
        background-color: #f5a623;
      }
    }
  }
`;

export const ResultsDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;

  > div {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

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
`;
