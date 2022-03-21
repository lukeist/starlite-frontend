import CurrencyInput from "./CurrencyInput";
import { getEstimateQuantity } from "./PanelBuySellStock-FuncGetEstimate";
import SellAll from "./PanelBuySellStock-SellAll";
import decimalConverter from "./_getDecimal";

const PanelBuySellStockDollars = ({
  stockCurrentPrice,
  tradeQuantity,
  setTradeQuantity,
  totalCost,
  setTotalCost,
  isBuying,
  stockPriceChange,
  quantityOfCurrentStock,
  isSellAll,
  setIsSellAll,
  setToTalCostToString,
}) => {
  const handleInput = (e) => {
    const getNumberOfDollars = e.target.value;
    const getEstimateQuantityFromFunction = getEstimateQuantity(
      getNumberOfDollars,
      stockCurrentPrice
    );
    setTradeQuantity(
      parseFloat(getEstimateQuantityFromFunction.estimateQuantity)
    );
    setTotalCost(getEstimateQuantityFromFunction.estimateCost);
  };

  const sellAllInDollars = decimalConverter(
    stockCurrentPrice * quantityOfCurrentStock,
    100
  );

  const handleOnClickCurrencyInput = () => {
    if (isSellAll) {
      setTotalCost(sellAllInDollars);
      setIsSellAll(false);
    }
  };

  return (
    <div>
      <div className="trade-info">
        <label className="trade-label" htmlFor="amount">
          Amount
        </label>
        <CurrencyInput
          className="input-name trade-input"
          type="text"
          placeholder="$0.00"
          onChange={handleInput}
          onClick={handleOnClickCurrencyInput}
          value={
            isSellAll
              ? sellAllInDollars
              : isNaN(totalCost)
              ? ""
              : totalCost === 0
              ? ""
              : totalCost
          }
        />
      </div>
      <hr className="trade-hr-line" />
      <div className="trade-info">
        <span className="estimate">Est. Quantity</span>
        <span className="estimate-result">
          {isNaN(tradeQuantity) ? 0 : tradeQuantity}
        </span>
      </div>
      {!isBuying && (
        <SellAll
          stockCurrentPrice={stockCurrentPrice}
          setTradeQuantity={setTradeQuantity}
          stockPriceChange={stockPriceChange}
          setIsSellAll={setIsSellAll}
          sellAllInDollars={sellAllInDollars}
          setTotalCost={setTotalCost}
          setToTalCostToString={setToTalCostToString}
          quantityOfCurrentStock={quantityOfCurrentStock}
        />
      )}
    </div>
  );
};

export default PanelBuySellStockDollars;
