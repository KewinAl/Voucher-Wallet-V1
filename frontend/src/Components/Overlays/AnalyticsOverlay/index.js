import React from "react";
import {
  AnalyticsDiv,
  AnalyticsOverlayDiv,
  LocationList,
  ResultsDiv,
} from "./AnalyticsOverlay.styles";
import { Cell, Pie, PieChart, Tooltip } from "recharts";

const AnalyticsOverlay = ({
  visible,
  exitFunction,
  redeemed,
  redeemable,
  analytics,
}) => {
  const handleClose = (e) => {
    if ((e.target.id = "background")) {
      exitFunction(!visible);
    }
  };
  let percentage = (redeemed / redeemable) * 100;

  const malePercent = analytics.male;
  const femalePercent = analytics.female;
  const otherPercent = analytics.other;

  const colors = ["#06c076", "#522fbc", "#f5a623"];

  const data = [
    {
      y: malePercent,
      color: colors[0],
      label: "Male",
    },
    {
      y: femalePercent,
      color: colors[1],
      label: "Female",
    },
    {
      y: otherPercent,
      color: colors[2],
      label: "Other",
    },
  ];

  // Sort data array in descending order of y values
  // data.sort((a, b) => b.y - a.y);

  return (
    <AnalyticsOverlayDiv>
      <h1>Coupon Analytics</h1>
      <AnalyticsDiv>
        <div className="CouponsRedeemed">
          <span>Coupons redeemed:</span>
          <span>
            ({redeemed} of {redeemable})
          </span>
          <ResultsDiv percentage={percentage}>
            <span className="Percentage">{percentage}%</span>
            {/*<span className="Redeemed">*/}
            {/*  ({redeemed} / {redeemable})*/}
            {/*</span>*/}
          </ResultsDiv>
        </div>
        <h2>User Analytics</h2>
        <div className="UserAnalytics">
          <div>
            <span>Average Age</span>
            <ResultsDiv>
              <span>{analytics.averageAge}</span>
            </ResultsDiv>
          </div>
          <div className="GenderAnalytics">
            <span>Gender</span>
            <ResultsDiv>
              <div className="PieChart">
                <PieChart width={150} height={150}>
                  <Pie
                    data={data}
                    dataKey="y"
                    nameKey="label"
                    cx="50%"
                    cy="50%"
                    innerRadius={0}
                    outerRadius={60}
                    fill="#8884d8"
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={colors[index % colors.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </div>
              <div className="GenderLegend">
                <div className="GenderLegendBox MaleSlice"></div>
                <span>{malePercent}% male</span>
                <div className="GenderLegendBox FemaleSlice"></div>
                <span>{femalePercent}% female</span>
                <div className="GenderLegendBox OtherSlice"></div>
                <span>{otherPercent}% other</span>
              </div>
            </ResultsDiv>
          </div>
          <div>
            <span>Locations</span>
            <ResultsDiv>
              <LocationList>
                <div>
                  <span>Zurich</span>
                  <span>{analytics.zurich}%</span>
                </div>
                <div>
                  <span>Basel</span>
                  <span>{analytics.basel}%</span>
                </div>
                <div>
                  <span>Bern</span>
                  <span>{analytics.bern}%</span>
                </div>
              </LocationList>
            </ResultsDiv>
          </div>
        </div>
      </AnalyticsDiv>
    </AnalyticsOverlayDiv>
  );
};

export default AnalyticsOverlay;
