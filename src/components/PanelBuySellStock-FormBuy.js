import { tradeMessagesAction } from "../store/actions/messagesAction";
import { currentDateTime } from "./_getDateTime";

const PanelBuySellStockFormBuy = ({
  setTotalCost,
  setTradeQuantity,
  setCurrentBalance,
  currentBalanceAction,
  positions,
  buyAction,
  dispatch,
  firstBuyAction,
  symbol,
  stockPriceChange,
  currentBalance,
  showPopupNotEnoughMoney,
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
  totalCostToString,
  setToTalCostToString,
  isBuying,
  setPopupAfterTrade,
  companyName,
}) => {
  const PanelBuySellStockFormSubmit = (e) => {
    e.preventDefault();
    setTotalCost(0);
    setTradeQuantity(0);
    setToTalCostToString("0.00");

    const balanceAfterBuy = currentBalance - totalCost;
    setCurrentBalance(balanceAfterBuy);
    dispatch(currentBalanceAction(balanceAfterBuy));
    const buy = true;
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

    setPopupAfterTrade(true);

    if (positions.some((position) => position.symbol === symbol)) {
      // BUYING WHEN THERE IS ALREADY SOME POSITIONS
      dispatch(buyAction(symbol, companyName, tradeQuantity));
    } else {
      // BUYING WHEN THERE IS NO POSITION YET
      dispatch(firstBuyAction(symbol, companyName, tradeQuantity));
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
        currentBalance > totalCost
          ? PanelBuySellStockFormSubmit
          : showPopupNotEnoughMoney
      }
    >
      <div className="trade-info-container">
        <div className="trade-info">
          <label className="trade-label" htmlFor="investment-type">
            Invest In
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
              {/* <li className="investment-type-option">{optionSelected}</li> */}
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
            stockPriceChange={stockPriceChange}
            isBuying={isBuying}
          />
        ) : (
          <PanelBuySellStockShares
            stockCurrentPrice={stockCurrentPrice}
            tradeQuantity={tradeQuantity}
            setTradeQuantity={setTradeQuantity}
            setTotalCost={setTotalCost}
            totalCostToString={totalCostToString}
            setToTalCostToString={setToTalCostToString}
            stockPriceChange={stockPriceChange}
            isBuying={isBuying}
          />
        )}
      </div>
      <div className="trade-submit">
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};
export default PanelBuySellStockFormBuy;
