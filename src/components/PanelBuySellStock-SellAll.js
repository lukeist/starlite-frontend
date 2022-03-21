import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { getEstimateCost } from "./PanelBuySellStock-FuncGetEstimate";
const SellAll = ({
  stockCurrentPrice,
  setTradeQuantity,
  stockPriceChange,
  setIsSellAll,
  // sellAllInDollars,
  quantityOfCurrentStock,
  setTotalCost,
  setToTalCostToString,
}) => {
  const handleSellAll = () => {
    setIsSellAll(true);
    // const sellAllQuantity = Math.round(
    //   ((sellAllInDollars / stockCurrentPrice + Number.EPSILON) * 100) / 100
    // );
    const getNumberOfShares = quantityOfCurrentStock;
    const getEstimateCostFromFunction = getEstimateCost(
      quantityOfCurrentStock,
      stockCurrentPrice
    );
    // console.log(getNumberOfShares, quantityOfCurrentStock);
    // const getNumberOfSharesToNegative = 0 - getNumberOfShares;
    setTradeQuantity(getNumberOfShares);
    setTotalCost(getEstimateCostFromFunction.estimateCost);
    setToTalCostToString(getEstimateCostFromFunction.estimateCostToString);
  };
  return (
    <div className="trade-info">
      <span className="estimate"></span>
      <div className="sell-all">
        {" "}
        <FontAwesomeIcon
          className="more-icon"
          icon={faExclamationCircle}
        />{" "}
        <span
          onClick={handleSellAll}
          className={stockPriceChange < 0 ? "stonk-down" : "stonk-up"}
        >
          Sell All
        </span>
      </div>
    </div>
  );
};

export default SellAll;
