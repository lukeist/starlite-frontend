import { getEstimateCost } from "./PanelBuySellStock-FuncGetEstimate";
import SellAll from "./PanelBuySellStock-SellAll";

const PanelBuySellStockShares = ({
  stockCurrentPrice,
  tradeQuantity,
  setTradeQuantity,
  setTotalCost,
  totalCostToString,
  setToTalCostToString,
  isBuying,
  stockPriceChange,
  isSellAll,
  setIsSellAll,
  quantityOfCurrentStock,
}) => {
  const maxInputLength = 9; // only 9 digits allow in input

  const handleEstimateCost = (e) => {
    const getNumberOfShares = e.target.value;
    const getEstimateCostFromFunction = getEstimateCost(
      getNumberOfShares,
      stockCurrentPrice
    );
    setTradeQuantity(parseFloat(getNumberOfShares));
    setTotalCost(getEstimateCostFromFunction.estimateCost);
    // LIMIT input TO ONLY $999,999,999
    if (getNumberOfShares.length < maxInputLength + 1) {
      getNumberOfShares > 0
        ? setToTalCostToString(getEstimateCostFromFunction.estimateCostToString)
        : setToTalCostToString("0.00");
    }
  };
  const limitNumberToTen = (number) => {
    return parseFloat(number.toString().slice(0, maxInputLength));
  };
  return (
    <div>
      <div className="trade-info">
        <label className="trade-label" htmlFor="tradeQuantity-shares">
          Shares
        </label>
        <input
          type="number"
          min="0"
          step="any" // to avoid required's error with float number: 22.2342 => 22 or 23 only
          //   onInput="validity.valid||(value='')"
          required
          onChange={handleEstimateCost}
          className="input-name trade-input"
          id="tradeQuantity-shares"
          name="tradeQuantity-shares"
          placeholder="0"
          value={
            tradeQuantity === 0
              ? ""
              : tradeQuantity.length > maxInputLength
              ? limitNumberToTen(tradeQuantity)
              : tradeQuantity
          }
        />
      </div>
      <div className="trade-info">
        <span className="market-price">Market Price</span>
        <span className="market-price-result">${stockCurrentPrice}</span>
      </div>
      <hr className="trade-hr-line" />
      <div className="trade-info">
        <span className="estimate">Estimate Cost</span>
        <span className="estimate-result">${totalCostToString}</span>
      </div>
      {!isBuying && (
        <SellAll
          stockCurrentPrice={stockCurrentPrice}
          setTradeQuantity={setTradeQuantity}
          stockPriceChange={stockPriceChange}
          setIsSellAll={setIsSellAll}
          quantityOfCurrentStock={quantityOfCurrentStock}
          setTotalCost={setTotalCost}
          setToTalCostToString={setToTalCostToString}
        />
      )}
    </div>
  );
};
export default PanelBuySellStockShares;
