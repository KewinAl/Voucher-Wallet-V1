import {
  AnalyticsDiv,
  AnalyticsOverlayDiv,
  LocationList,
  ResultsDiv,
} from "./AnalyticsOverlay.styles";

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
  return (
    <AnalyticsOverlayDiv>
      <h1>Analytics</h1>
      <AnalyticsDiv>
        <div className="CouponsRedeemed">
          <span>Coupons redeemed:</span>
          <ResultsDiv>
            <span>{percentage}%</span>
            <span>
              {redeemed}/{redeemable}
            </span>
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
          <div>
            <span>Gender</span>
            <ResultsDiv>
              <div>
                <span>{analytics.male}%</span>
                <span>male</span>
              </div>
              <div>
                <span>{analytics.female}%</span>
                <span>female</span>
              </div>
              <div>
                <span>{analytics.other}%</span>
                <span>other</span>
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
