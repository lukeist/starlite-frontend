import { useSelector } from "react-redux";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCog, faEraser } from "@fortawesome/free-solid-svg-icons";
import {
  TableOfPositions,
  TableofPositionsFooter,
  TableofPositionsFooterTotal,
  TableofPositionsHeader,
} from "../components/Portfolio-TableOfPositions";
import { useDispatch } from "react-redux";
import {
  // getPortfolioUpdateToCurrentPriceAction,
  getSampleAction,
} from "../store/actions/tradeAction";
import { tradeMessagesSampleAction } from "../store/actions/messagesAction";
import { useState } from "react";
import getCurrentMarketValueForPorfolio from "../components/_getCurrentMarketValueForPorfolio";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import getTotalSumOfAllPositions from "../components/_getTotalSumOfAllPositions";

const Portfolio = () => {
  const [getSample, setGetSample] = useState(false);

  const { tradeMessages } = useSelector((state) => state.messages);
  const { positions } = useSelector((state) => state.portfolio);

  // const dollarSymbol = `$`;
  const dispatch = useDispatch();

  const getSampleActionData = async () => {
    await dispatch(getSampleAction());
    await dispatch(tradeMessagesSampleAction());
    setGetSample(true);
  };
  // useEffect to run getCurrentMarketValueForPorfolio() when click on button 'click here' >> because >> if put this () inside getSampleActionData(), it still uses the old state of positions = []
  useEffect(() => {
    if (location.pathname.includes("portfolio") && getSample) {
      getCurrentMarketValueForPorfolio(dispatch, tradeMessages, positions);
      setGetSample(false);
      // getTotalSumOfAllPositions(dispatch, positions);
      // console.log("1111");
    }
  }, [getSample]);

  const location = useLocation(); // PUT SToCKs TO STATE WHEN GO TO /portfolio
  // UPDATE TO CURRENT SHARE PRICE WHEN GO TO PORTFOLIO
  useEffect(() => {
    // only useEffect when getSample is false >> to prevent running useEffect 2 times when click on button 'click here'
    if (location.pathname.includes("portfolio") && !getSample) {
      getCurrentMarketValueForPorfolio(dispatch, tradeMessages, positions);
      // getTotalSumOfAllPositions(dispatch, positions);
      // console.log("2222");
    }
  }, [location.pathname]);

  return (
    <div className="home">
      {/* {stockActive ? ( */}
      <div className="home-body">
        <div className="portfolio-body">
          <div className="header-sticky">
            <h1
              onClick={() =>
                console.log("totalCost, totalGainLoss, totalValue")
              }
              className="header-title"
            >
              My Porfolio
            </h1>
          </div>
          {positions.length > 0 ? (
            <div className="table-row">
              <TableofPositionsHeader />
              {positions.map((position) => (
                <TableOfPositions key={position.symbol} position={position} />
              ))}
              <TableofPositionsFooter />
              <TableofPositionsFooterTotal positions={positions} />
            </div>
          ) : (
            <div className="header-subtitle">
              <h4>Your portfolio is empty. Go buy something awesome!</h4>
              <h4>
                Or get sample data:
                <span
                  onClick={getSampleActionData}
                  className="header-subtitle-button"
                >
                  click here
                </span>
              </h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
