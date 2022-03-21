import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faWindowClose,
//   faSortUp,
//   faSortDown,
// } from "@fortawesome/free-solid-svg-icons";
import numberWithCommas from "./_getCommasAsThousandsSeparators ";
import { useSelector } from "react-redux";
// import { quoteData } from "../api";
// import { useState } from "react";
// import axios from "axios";
// import { useEffect } from "react";
// import decimalConverter from "./_getDecimal";
// import { useDispatch } from "react-redux";
// import { getPortfolioUpdateToCurrentPriceAction } from "../store/actions/tradeAction";
// import { isGotPortfolioUpdateToCurrentPriceDispatchedAction } from "../store/actions/isGotPortfolioUpdateToCurrentPriceDispatchedAction";

export const TableofPositionsHeader = () => {
  return (
    <div className="portfolio-table-header">
      <div className="table-header">
        <ul className="table-column">
          <li className="table-left">
            <p className="portfolio-table-title">Symbol</p>
            <p className="portfolio-table-subtitle">Company Name</p>
          </li>
          <li className="table-right">
            <p className="portfolio-table-title">Quantity</p>
            <p className="portfolio-table-subtitle"></p>
          </li>
          <li className="table-right">
            <p className="portfolio-table-title">Share Price</p>
          </li>
          <li className="table-right">
            <p className="portfolio-table-title">Price Change</p>
            <p className="portfolio-table-subtitle">(%)</p>
          </li>
          <li className="table-right">
            <p className="portfolio-table-title">Day Change</p>
            <p className="portfolio-table-subtitle">(%)</p>
          </li>
          <li className="table-right">
            <p className="portfolio-table-title">Cost Basis</p>
          </li>
          <li className="table-right">
            <p className="portfolio-table-title">Gain/Loss</p>
            <p className="portfolio-table-subtitle">(%)</p>
          </li>{" "}
          <li className="table-right">
            <p className="portfolio-table-title">Market Value</p>
          </li>
        </ul>
      </div>
      <hr />
    </div>
  );
};

//////////////////////////////////////////////////////////////////////////////////////////////

export const TableOfPositions = ({ position }) => {
  // const index = position.findIndex(
  //   (stock) => stock.symbol === action.payload.symbol
  // );
  //////////////// GET TOTAL COST OF ALL CURRENT SHARE'S ORDERS, INCLUDE SALE ORDERS
  // const { tradeMessages } = useSelector((state) => state.messages);
  // const { positions } = useSelector((state) => state.portfolio);
  // const indexFirstPositionInArray = 0;
  // const filterOutArrayThisPosition = filter(
  //   (stock) => stock.symbol === symbol
  // );
  // const thisPosition = filterOutArrayThisPosition[indexFirstPositionInArray];

  // const [current, setCurrent] = useState({});

  // const allOrdersFromCurrentPosition = tradeMessages.filter(
  //   //<<<<<<<<<<<<<<<<<<<<< dispatch!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //   (order) => order.symbol === position.symbol
  // );
  // let costBasisNumber = 0;
  // if (allOrdersFromCurrentPosition.length > 0) {
  //   for (let i = 0; i < allOrdersFromCurrentPosition.length; i++) {
  //     costBasisNumber =
  //       Math.round(
  //         (allOrdersFromCurrentPosition[i].tradeCostTotal +
  //           costBasisNumber +
  //           Number.EPSILON) *
  //           100
  //       ) / 100;
  //   }
  // }

  // const costBasis = dollarSign + numberWithCommas(costBasisNumber);

  //////////////// GET COMPANY's DATA, CURRENT QUOTE
  // const [quote, setQuote] = useState("");

  // const fetchQuote = async (symbol) => {
  //   return await axios.get(quoteData(symbol)).then((res) => setQuote(res.data)); // axios gets data instead of Promise
  // };
  // const dispatch = useDispatch();
  // const location = useLocation(); // PUT SToCKs TO STATE WHEN GO TO /portfolio
  // UPDATE TO CURRENT SHARE PRICE WHEN GO TO PORTFOLIO
  // useEffect(() => {
  //   if (location.pathname.includes("portfolio")) {
  //     dispatch(getPortfolioUpdateToCurrentPriceAction(symbol, costBasisNumber));
  //   }
  // }, [location.pathname]);

  // useEffect(() => {
  //   if (location.pathname.includes("portfolio")) {
  //     dispatch(getPortfolioUpdateToCurrentPriceAction(symbol, costBasisNumber));
  //     // dispatch(isGotPortfolioUpdateToCurrentPriceDispatchedAction());
  //   }
  // }, [getSample]);

  // useEffect(() => {
  //   thisPosition.current.sharePriceNumber !== 0 && setShowPosition(true);
  // }, [thisPosition.current.sharePriceNumber]);

  // useEffect(() => {
  //   if (position.current.sharePriceNumber !== 0) {
  //     setCurrent(position.current);
  //   }
  // }, [getSample]);

  // const fetchQuote = async (symbol) => {
  //   await axios.get(quoteData(symbol)).then((res)
  // => setQuote(res.data)); // axios gets data instead of Promise
  // if (quote !== "") {
  //   const sharePriceNumber = await quote.c;
  //   const sharePrice = await numberWithCommas(sharePriceNumber);
  //   const priceChangePercentage = await decimalConverter(quote.dp, 100);
  //   const priceChange = await quote.d;
  //   const priceChangeNegative = await numberWithCommas(quote.d).substring(
  //     indexAfterMinusSign
  //   ); // remove -
  //   const marketValueNumber = await decimalConverter(
  //     sharePriceNumber * quantity,
  //     100
  //   );
  //   const marketValue = await numberWithCommas(marketValueNumber);
  //   const dayChangeNumber = await decimalConverter(
  //     priceChange * quantity,
  //     100
  //   );
  //   const dayChange = await numberWithCommas(dayChangeNumber);
  //   const dayChangeNegative = await dayChange.substring(indexAfterMinusSign); // remove -
  //   const dayChangePercentage = await decimalConverter(
  //     (dayChangeNumber * 100) / costBasisNumber,
  //     100
  //   );
  //   const gainLostAllTimeNumber = await decimalConverter(
  //     marketValueNumber - costBasisNumber,
  //     100
  //   );
  //   const gainLostAllTime = await numberWithCommas(gainLostAllTimeNumber);
  //   const gainLostAllTimeNegative = await gainLostAllTime.substring(
  //     indexAfterMinusSign
  //   ); // remove -
  //   const gainLostAllTimePercentage = await decimalConverter(
  //     (gainLostAllTimeNumber * 100) / costBasisNumber,
  //     100
  //   );

  //   // STOP ARRAY FROM keep ADDING AGAIN AND AGAIN
  //   // totalValue = await totalValue.filter(
  //   //   (cost) => cost.symbol !== position.symbol
  //   // );
  //   await totalValue.push(marketValueNumber);
  //   // totalCost = await totalCost.filter(
  //   //   (cost) => cost.symbol !== position.symbol
  //   // );
  //   await totalCost.push({ symbol: position.symbol, cost: costBasisNumber });
  //   // totalGainLoss = await totalGainLoss.filter(
  //   //   (cost) => cost.symbol !== position.symbol
  //   // );
  //   await totalGainLoss.push(gainLostAllTimeNumber);

  //   setQuoteAll({
  //     marketValue,
  //     sharePrice,
  //     priceChangePercentage,
  //     priceChangeNegative,
  //     priceChange,
  //     dayChangeNumber,
  //     dayChangeNegative,
  //     dayChange,
  //     dayChangePercentage,
  //     gainLostAllTime,
  //     gainLostAllTimeNumber,
  //     gainLostAllTimeNegative,
  //     gainLostAllTimePercentage,
  //   });
  // }
  // };

  // useEffect(() => {
  //   if (quote !== "") {
  //     //////////////////////////////////////////// THIS WORKS
  //     // const sharePriceNumber = quote.c;
  //     // const sharePrice = dollarSign + numberWithCommas(sharePriceNumber);
  //     // const priceChangePercentage = decimalConverter(quote.dp, 100);
  //     // const priceChangeNumber = quote.d;
  //     // const priceChange =
  //     //   dollarSignPositive + numberWithCommas(priceChangeNumber);
  //     // const priceChangeNegative =
  //     //   dollarSignNegative +
  //     //   numberWithCommas(quote.d).substring(indexAfterMinusSign); // remove -;
  //     // // .substring(
  //     // //   indexAfterMinusSign
  //     // // ); // remove -
  //     // const marketValueNumber = decimalConverter(
  //     //   sharePriceNumber * quantity,
  //     //   100
  //     // );
  //     // const marketValue = dollarSign + numberWithCommas(marketValueNumber);
  //     // const dayChangeNumber = decimalConverter(
  //     //   priceChangeNumber * quantity,
  //     //   100
  //     // );
  //     // const dayChange = dollarSignPositive + numberWithCommas(dayChangeNumber);
  //     // const dayChangeNegative =
  //     //   dollarSignNegative +
  //     //   numberWithCommas(dayChangeNumber).substring(indexAfterMinusSign); // remove -;;
  //     // // .substring(indexAfterMinusSign); // remove -
  //     // const dayChangePercentage = decimalConverter(
  //     //   (dayChangeNumber * 100) / costBasisNumber,
  //     //   100
  //     // );
  //     // const gainLostAllTimeNumber = decimalConverter(
  //     //   marketValueNumber - costBasisNumber,
  //     //   100
  //     // );
  //     // const gainLostAllTime =
  //     //   dollarSignPositive + numberWithCommas(gainLostAllTimeNumber);
  //     // const gainLostAllTimeNegative =
  //     //   dollarSignNegative +
  //     //   numberWithCommas(gainLostAllTimeNumber).substring(indexAfterMinusSign); // remove -
  //     // const gainLostAllTimePercentage = decimalConverter(
  //     //   (gainLostAllTimeNumber * 100) / costBasisNumber,
  //     //   100
  //     // );

  //     // STOP ARRAY FROM keep ADDING AGAIN AND AGAIN
  //     // totalValue = totalValue.filter(
  //     //   (value) => value.symbol !== position.symbol
  //     // );
  //     totalValue.push({ symbol: position.symbol, cost: marketValueNumber });
  //     // totalCost = await totalCost.filter(
  //     //   (cost) => cost.symbol !== position.symbol
  //     // );
  //     totalCost.push({ symbol: position.symbol, cost: costBasisNumber });
  //     // totalGainLoss = await totalGainLoss.filter(
  //     //   (cost) => cost.symbol !== position.symbol
  //     // );
  //     totalGainLoss.push({
  //       symbol: position.symbol,
  //       cost: gainLostAllTimeNumber,
  //     });

  //     // const currentPosition = {
  //     //   sharePriceNumber,
  //     //   sharePrice,
  //     //   priceChangeNumber,
  //     //   priceChange,
  //     //   priceChangePercentage,
  //     //   priceChangeNegative,
  //     //   dayChangeNumber,
  //     //   dayChange,
  //     //   dayChangePercentage,
  //     //   dayChangeNegative,
  //     //   costBasisNumber,
  //     //   costBasis,
  //     //   gainLostAllTimeNumber,
  //     //   gainLostAllTime,
  //     //   gainLostAllTimePercentage,
  //     //   gainLostAllTimeNegative,
  //     //   marketValueNumber,
  //     //   marketValue,
  //     // };
  //     // dispatch(getPortfolioUpdateToCurrentPriceAction(symbol, currentPosition));
  //   }
  // }, [quote]);

  //////////////// CALCULATE MARKET VALUE, DAY CHANGE, COST PER SHARE, GAIN/LOSS PER SHARE, GAIN/LOSS TOTAL

  // let sharePriceNumber;
  // let sharePrice;
  // let priceChangePercentage;
  // let priceChange;
  // let priceChangeNegative; // remove -
  // let marketValueNumber;
  // let marketValue;
  // let dayChangeNumber;
  // let dayChange;
  // let dayChangeNegative; // remove -
  // let dayChangePercentage;
  // let gainLostAllTimeNumber;
  // let gainLostAllTime;
  // let gainLostAllTimeNegative; // remove -
  // let gainLostAllTimePercentage;
  // if (quote !== "") {
  //   totalCost = totalCost.filter((cost) => cost.symbol !== position.symbol); // STOP ARRAY FROM keep ADDING AGAIN AND AGAIN
  //   totalCost.push({ symbol: position.symbol, cost: costBasisNumber });
  //   console.log(costBasisNumber);
  //   sharePriceNumber = quote.c;
  //   sharePrice = numberWithCommas(sharePriceNumber);
  //   priceChangePercentage = decimalConverter(quote.dp, 100);
  //   priceChange = quote.d;
  //   priceChangeNegative = quote.d.toString().substring(indexAfterMinusSign);
  //   marketValueNumber = decimalConverter(sharePriceNumber * quantity, 100);
  //   totalValue = totalValue.filter((cost) => cost.symbol !== position.symbol); // STOP ARRAY FROM keep ADDING AGAIN AND AGAIN
  //   totalValue.push(marketValueNumber);
  //   marketValue = numberWithCommas(marketValueNumber);
  //   dayChangeNumber = decimalConverter(priceChange * quantity, 100);
  //   dayChange = numberWithCommas(dayChangeNumber);
  //   dayChangeNegative = dayChange.substring(indexAfterMinusSign);
  //   dayChangePercentage = decimalConverter(
  //     (dayChangeNumber * 100) / costBasisNumber,
  //     100
  //   );
  //   gainLostAllTimeNumber = decimalConverter(
  //     marketValueNumber - costBasisNumber,
  //     100
  //   );
  //   totalGainLoss = totalGainLoss.filter(
  //     (cost) => cost.symbol !== position.symbol
  //   ); // STOP ARRAY FROM keep ADDING AGAIN AND AGAIN
  //   totalGainLoss.push(gainLostAllTimeNumber);
  //   gainLostAllTime = numberWithCommas(gainLostAllTimeNumber);
  //   gainLostAllTimeNegative = gainLostAllTime.substring(indexAfterMinusSign);
  //   gainLostAllTimePercentage = decimalConverter(
  //     (gainLostAllTimeNumber * 100) / costBasisNumber,
  //     100
  //   );
  // }
  const signPositive = "+";
  const symbol = position.symbol;
  // const dollarSign = "$";
  const companyName = position.companyName;

  const quantity = position.quantity;
  const current = position.current;

  return (
    <Link to={`/stocks/${symbol}`}>
      <div className="portfolio-table-item">
        {position.current.sharePriceNumber > 0 && (
          <div className="table-item">
            <ul className="table-column">
              <li className="table-left">
                <p
                  onClick={() => console.log(current.sharePrice)}
                  className="portfolio-table-title"
                >
                  {symbol}
                </p>
                <p className="portfolio-table-subtitle">{companyName}</p>
              </li>
              <li className="table-right">
                <p className="portfolio-table-title">{quantity}</p>
              </li>
              <li
                className={
                  current.priceChangePercentage < 0
                    ? "table-right stonk-down"
                    : "table-right stonk-up"
                }
              >
                <p className="portfolio-table-title">
                  {position.current.sharePrice}
                </p>
              </li>
              <li
                className={
                  current.priceChangePercentage < 0
                    ? "table-right stonk-down"
                    : "table-right stonk-up"
                }
              >
                <p className="portfolio-table-title">
                  {current.priceChangePercentage < 0
                    ? current.priceChangeNegative
                    : current.priceChange}
                </p>
                <p className="portfolio-table-subtitle">
                  {current.priceChangePercentage < 0
                    ? current.priceChangePercentage
                    : signPositive + current.priceChangePercentage}
                  %
                </p>
              </li>
              <li
                className={
                  current.priceChangePercentage < 0
                    ? "table-right stonk-down"
                    : "table-right stonk-up"
                }
              >
                <p className="portfolio-table-title">
                  {current.dayChangeNumber < 0
                    ? current.dayChangeNegative
                    : (current.dayChangeNumber = 0
                        ? current.dayChange
                        : current.dayChange)}
                </p>
                <p className="portfolio-table-subtitle">
                  {current.priceChangePercentage < 0
                    ? current.dayChangePercentage
                    : signPositive + current.dayChangePercentage}
                  %
                </p>
              </li>
              <li className="table-right">
                <p className="portfolio-table-title">{current.costBasis}</p>
              </li>
              <li
                className={
                  current.gainLostAllTimeNumber < 0
                    ? "table-right stonk-down"
                    : "table-right stonk-up"
                }
              >
                <p className="portfolio-table-title">
                  {current.gainLostAllTimeNumber < 0
                    ? current.gainLostAllTimeNegative
                    : (current.gainLostAllTimeNumber = 0
                        ? current.gainLostAllTime
                        : current.gainLostAllTime)}
                </p>
                <p className="portfolio-table-subtitle">
                  {current.gainLostAllTimeNumber < 0
                    ? current.gainLostAllTimePercentage
                    : signPositive + current.gainLostAllTimePercentage}
                  %
                </p>
              </li>
              <li className="table-right">
                <p className="portfolio-table-title">{current.marketValue}</p>
              </li>
            </ul>
            <hr />
          </div>
        )}
      </div>
    </Link>
  );
};

//////////////////////////////////////////////////////////////////////////////////////////////

export const TableofPositionsFooter = () => {
  return (
    <div className="portfolio-table-header">
      <div className="table-header">
        <ul className="table-column">
          <li className="table-left"></li>
          <li className="table-right"></li>
          <li className="table-right"></li>
          <li className="table-right"></li>
          <li className="table-right"></li>
          <li className="table-right">Total Cost</li>
          <li className="table-right">Total Gain/Loss</li>
          <li className="table-right">Total Value</li>
        </ul>
      </div>
    </div>
  );
};

//////////////////////////////////////////////////////////////////////////////////////////////

export const TableofPositionsFooterTotal = () => {
  const { total } = useSelector((state) => state.portfolio);
  const signPositive = `+`;
  const dollarSign = `$`;
  const totalGainLoss = total.gainLoss;
  const totalCost = total.cost;
  const totalMarketValue = total.marketValue;
  const totalGainLossPercentage = total.gainLossPercentage;
  const totalGainLostNegative = total.gainLossNegative;
  return (
    <div className="portfolio-table-header">
      {totalCost > 0 && (
        <div className="table-header">
          <ul className="table-column">
            <li className="table-left"></li>
            <li className="table-right"></li>
            <li className="table-right"></li>
            <li className="table-right"></li>
            <li className="table-right"></li>
            <li
              onClick={() => console.log(totalGainLoss)}
              className="table-right"
            >
              <p className="portfolio-table-title">
                ${numberWithCommas(totalCost)}
              </p>
            </li>
            <li
              className={
                totalGainLoss < 0
                  ? "table-right stonk-down"
                  : "table-right stonk-up"
              }
            >
              <p className="portfolio-table-title">
                {totalGainLoss < 0
                  ? numberWithCommas(totalGainLostNegative)
                  : totalGainLoss === 0
                  ? `$0.00`
                  : signPositive + dollarSign + numberWithCommas(totalGainLoss)}
              </p>
              <p className="portfolio-table-subtitle">
                {totalGainLoss < 0
                  ? numberWithCommas(totalGainLossPercentage)
                  : signPositive + numberWithCommas(totalGainLossPercentage)}
                %
              </p>
            </li>
            <li className="table-right">
              <p className="portfolio-table-title">
                ${numberWithCommas(totalMarketValue)}
              </p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
