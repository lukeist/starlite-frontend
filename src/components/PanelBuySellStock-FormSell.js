import { sellAction, sellAllAction } from "../store/actions/tradeAction";
import { useState } from "react";
import { tradeMessagesAction } from "../store/actions/messagesAction";
import { currentDateTime } from "./_getDateTime";

const PanelBuySellStockFormSell = ({
  setTotalCost,
  currentBalance,
  setCurrentBalance,
  currentBalanceAction,
  dispatch,
  symbol,
  stockPriceChange,
  clickSelectHandler,
  FontAwesomeIcon,
  faAngleDown,
  exitPopUpShadow,
  isSelect,
  sharesSelectedHandler,
  shares,
  dollarsSelectedHandler,
  optionSelected,
  dollars,
  PanelBuySellStockDollars,
  totalCost,
  PanelBuySellStockShares,
  stockCurrentPrice,
  tradeQuantity,
  setTradeQuantity,
  isBuying,
  setIsBuying,
  quantityOfCurrentStock,
  totalCostToString,
  setToTalCostToString,
  showPopupNotEnoughShare,
  isTradeQuantityGreaterThanQuantityOfCurrentStock,
  setIsTradeQuantityGreaterThanQuantityOfCurrentStock,
  setPopupAfterTrade,
  companyName,
}) => {
  const [isSellAll, setIsSellAll] = useState(false);

  const handleSubmitSell = (e) => {
    e.preventDefault();

    const balanceAfterSell = currentBalance + totalCost;
    // console.log(tradeQuantity);
    // console.log(quantityOfCurrentStock);
    // tradeQuantity === quantityOfCurrentStock
    const buy = false;
    dispatch(
      tradeMessagesAction(
        symbol,
        stockCurrentPrice,
        tradeQuantity,
        totalCost,
        buy,
        currentDateTime()
      )
    );
    // const tradeQuantityToNegative = 0 - tradeQuantity;
    // SELL POSITION
    if (tradeQuantity > quantityOfCurrentStock) {
      setIsTradeQuantityGreaterThanQuantityOfCurrentStock(true);
    } else if (tradeQuantity === quantityOfCurrentStock) {
      setIsBuying(true);
      setTotalCost(0);
      setTradeQuantity(0);
      setToTalCostToString("0.00");
      setCurrentBalance(balanceAfterSell);
      dispatch(sellAllAction(symbol, companyName, tradeQuantity));
      dispatch(currentBalanceAction(balanceAfterSell));
      setPopupAfterTrade(true);
    } else {
      setIsTradeQuantityGreaterThanQuantityOfCurrentStock(false);
      setTotalCost(0);
      setTradeQuantity(0);
      setToTalCostToString("0.00");
      setCurrentBalance(balanceAfterSell);
      dispatch(sellAction(symbol, companyName, tradeQuantity));
      dispatch(currentBalanceAction(balanceAfterSell));
      setPopupAfterTrade(true);
    }
    setTimeout(() => {
      setPopupAfterTrade(false);
    }, 3000);
  };

  return (
    <form
      className={stockPriceChange < 0 ? "stonk-down" : "stonk-up"}
      action=""
      onSubmit={
        tradeQuantity < quantityOfCurrentStock ||
        tradeQuantity === quantityOfCurrentStock
          ? handleSubmitSell
          : showPopupNotEnoughShare
      }
    >
      <div className="trade-info-container">
        <div className="trade-info">
          <label className="trade-label" htmlFor="investment-type">
            Sell In
          </label>

          <button
            className={
              isSelect ? "investment-type-selected" : "investment-type-select"
            }
            type="button"
            id="investment-type"
            name="investment-type"
            onClick={clickSelectHandler}
          >
            <span>{optionSelected}</span>
            {<FontAwesomeIcon className="more-icon" icon={faAngleDown} />}
          </button>
          {isSelect && (
            <div onClick={exitPopUpShadow} className="popup-shadow"></div>
          )}
          {isSelect && (
            <ul
              className="investment-type-options"
              name="investment-type"
              id="investment-type"
            >
              <hr />
              <li
                onClick={sharesSelectedHandler}
                className="investment-type-option"
                value="shares"
              >
                {shares}
              </li>
              <hr />
              <li
                onClick={dollarsSelectedHandler}
                className="investment-type-option"
                value="dollars"
              >
                {dollars}
              </li>
            </ul>
          )}
        </div>
        {optionSelected === dollars ? (
          <PanelBuySellStockDollars
            stockCurrentPrice={stockCurrentPrice}
            tradeQuantity={tradeQuantity}
            setTradeQuantity={setTradeQuantity}
            totalCost={totalCost}
            setTotalCost={setTotalCost}
            isTradeQuantityGreaterThanQuantityOfCurrentStock={
              isTradeQuantityGreaterThanQuantityOfCurrentStock
            }
            isBuying={isBuying}
            stockPriceChange={stockPriceChange}
            quantityOfCurrentStock={quantityOfCurrentStock}
            isSellAll={isSellAll}
            setIsSellAll={setIsSellAll}
            setToTalCostToString={setToTalCostToString}
          />
        ) : (
          <PanelBuySellStockShares
            stockCurrentPrice={stockCurrentPrice}
            tradeQuantity={tradeQuantity}
            setTradeQuantity={setTradeQuantity}
            totalCost={totalCost}
            setTotalCost={setTotalCost}
            totalCostToString={totalCostToString}
            setToTalCostToString={setToTalCostToString}
            isTradeQuantityGreaterThanQuantityOfCurrentStock={
              isTradeQuantityGreaterThanQuantityOfCurrentStock
            }
            isBuying={isBuying}
            stockPriceChange={stockPriceChange}
            quantityOfCurrentStock={quantityOfCurrentStock}
            isSellAll={isSellAll}
            setIsSellAll={setIsSellAll}
          />
        )}
      </div>
      <div className="trade-submit">
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};
export default PanelBuySellStockFormSell;
