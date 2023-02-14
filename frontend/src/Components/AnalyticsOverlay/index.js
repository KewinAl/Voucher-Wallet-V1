import { AnalyticsOverlayDiv, AnalyticsDiv, ResultsDiv, LocationList, CouponsRedeemedDiv } from "./AnalyticsOverlay.styles";


const AnalyticsOverlay = ({ visible, exitFunction }) => {
    const handleClose = (e) => {
        if (e.target.id = 'background') {
            exitFunction(!visible);
        }
    }
    return (
        <AnalyticsOverlayDiv id='background' visible={visible} onClick={(e) => handleClose(e)}>
            <div>
                <h1>Analytics</h1>
                <AnalyticsDiv>
                    <div className="CouponsRedeemed">
                        <span>Coupons redeemed:</span>
                        <ResultsDiv>
                            <span>25%</span>
                            <span>14/28</span>
                        </ResultsDiv>
                    </div>
                    <h2>User Analytics</h2>
                    <div className="UserAnalytics">
                        <div>
                            <span>Average Age</span>
                            <ResultsDiv>
                                <span>28.65</span>
                            </ResultsDiv>
                        </div>
                        <div>
                            <span>Gender</span>
                            <ResultsDiv>
                                <div>
                                    <span>35%</span>
                                    <span>male</span>
                                </div>
                                <div>
                                    <span>35%</span>
                                    <span>female</span>
                                </div>
                                <div>
                                    <span>35%</span>
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
                                        <span>30%</span>
                                    </div>
                                    <div>
                                        <span>Basel</span>
                                        <span>30%</span>
                                    </div>
                                    <div>
                                        <span>Bern</span>
                                        <span>30%</span>
                                    </div>

                                </LocationList>
                            </ResultsDiv>
                        </div>
                    </div>
                </AnalyticsDiv>
            </div>
        </AnalyticsOverlayDiv>
    )
}

export default AnalyticsOverlay;