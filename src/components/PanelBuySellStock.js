import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { showPopUpAction } from "../store/actions/isPopUpListsAction";
import { useState } from "react";
import PanelBuySellStockDollars from "./PanelBuySellStock-Dollars";
import PanelBuySellStockShares from "./PanelBuySellStock-Shares";
import PopupEverything from "./PanelBuySellStock-PopupEverything";
import { useSelector } from "react-redux";
// import { PanelBuySellStockFormSubmit } from "./PanelBuySellStock-FormSubmit";
import { buyAction, firstBuyAction } from "../store/actions/tradeAction";
import { currentBalanceAction } from "../store/actions/currentBalanceAction";
import PanelBuySellStockFormSell from "./PanelBuySellStock-FormSell";
import PanelBuySellStockFormBuy from "./PanelBuySellStock-FormBuy";
import decimalConverter from "./_getDecimal";

const PanelBuySellStock = ({
  company,
  stockPriceChange,
  stockCurrentPrice,
  setPopupAfterTrade,
}) => {
  const shares = "Shares";
  const dollars = "Dollars";
  const symbol = company.ticker;
  const companyName = company.name;
  const [isBuying, setIsBuying] = useState(true);
  const [isSelect, setIsSelect] = useState(false);
  const [notEnoughMoney, setNotEnoughMoney] = useState(false);
  const [optionSelected, setOptionSelected] = useState(shares);
  const [isPopupSubmit, setIsPopupSubmit] = useState(false);
  const [tradeQuantity, setTradeQuantity] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [totalCostToString, setToTalCostToString] = useState("0.00");

  const { positions, buyingPower } = useSelector((state) => state.portfolio);
  const [currentBalance, setCurrentBalance] = useState(buyingPower.balance);
  const [
    isTradeQuantityGreaterThanQuantityOfCurrentStock,
    setIsTradeQuantityGreaterThanQuantityOfCurrentStock,
  ] = useState(false);

  const buyingPowerWithDecimal = decimalConverter(currentBalance, 100);
  const buyingPowerWithCommas = buyingPowerWithDecimal
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ","); //How to print a number with commas as thousands separators in JavaScript https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  const buyingPowerWithCommasSlicedFromDecimalPoint =
    buyingPowerWithCommas.slice(0, buyingPowerWithCommas.indexOf(".") + 3); // to prevent a bug that makes buyingPower looks like this: $144,918.85,000,000,003

  const indexOfCurrentStockInPositions = positions.findIndex(
    (position) => position.symbol === symbol
  );

  let quantityOfCurrentStock;
  indexOfCurrentStockInPositions > -1
    ? (quantityOfCurrentStock =
        positions[indexOfCurrentStockInPositions].quantity)
    : (quantityOfCurrentStock = 0);

  const exitPopUpShadow = (e) => {
    const element = e.target;
    if (element.classList.contains("popup-shadow")) {
      isSelect && setIsSelect(false);
      isPopupSubmit && setIsPopupSubmit(false);
      notEnoughMoney && setNotEnoughMoney(false);
      isTradeQuantityGreaterThanQuantityOfCurrentStock &&
        setIsTradeQuantityGreaterThanQuantityOfCurrentStock(false);
    }
  };

  const clickSelectHandler = () => {
    setIsSelect(true);
  };

  const sharesSelectedHandler = () => {
    setOptionSelected(shares);
    setIsSelect(!isSelect);
  };

  const dollarsSelectedHandler = () => {
    setOptionSelected(dollars);
    setIsSelect(false);
  };

  const dispatch = useDispatch();
  const showPopUpList = () => {
    dispatch(showPopUpAction());
    document.body.style.overflow = "hidden";
  };

  const showPopupNotEnoughMoney = (e) => {
    e.preventDefault();
    setNotEnoughMoney(true);
  };

  const showPopupNotEnoughShare = (e) => {
    e.preventDefault();
    setIsTradeQuantityGreaterThanQuantityOfCurrentStock(true);
  };

  const handleSetIsBuying = () => {
    setIsBuying(!isBuying);
    optionSelected === dollars
      ? setToTalCostToString("0.00")
      : setTradeQuantity(0);
  };
  return (
    <div className="trade-list">
      <PopupEverything
        exitPopUpShadow={exitPopUpShadow}
        isPopupSubmit={isPopupSubmit}
        notEnoughMoney={notEnoughMoney}
        isTradeQuantityGreaterThanQuantityOfCurrentStock={
          isTradeQuantityGreaterThanQuantityOfCurrentStock
        }
      />

      <div className="trade-panel">
        <div className="trade-header">
          {isBuying ? <h4>Buy {symbol}</h4> : <h4>Sell {symbol}</h4>}
        </div>
        <hr />

        <div className="trade-items">
          {isBuying ? (
            <PanelBuySellStockFormBuy
              setTotalCost={setTotalCost}
              setTradeQuantity={setTradeQuantity}
              currentBalance={currentBalance}
              totalCost={totalCost}
              setCurrentBalance={setCurrentBalance}
              dispatch={dispatch}
              currentBalanceAction={currentBalanceAction}
              positions={positions}
              buyAction={buyAction}
              symbol={symbol}
              tradeQuantity={tradeQuantity}
              firstBuyAction={firstBuyAction}
              stockPriceChange={stockPriceChange}
              showPopupNotEnoughMoney={showPopupNotEnoughMoney}
              isSelect={isSelect}
              clickSelectHandler={clickSelectHandler}
              optionSelected={optionSelected}
              FontAwesomeIcon={FontAwesomeIcon}
              faAngleDown={faAngleDown}
              exitPopUpShadow={exitPopUpShadow}
              sharesSelectedHandler={sharesSelectedHandler}
              shares={shares}
              dollarsSelectedHandler={dollarsSelectedHandler}
              dollars={dollars}
              PanelBuySellStockDollars={PanelBuySellStockDollars}
              stockCurrentPrice={stockCurrentPrice}
              PanelBuySellStockShares={PanelBuySellStockShares}
              totalCostToString={totalCostToString}
              setToTalCostToString={setToTalCostToString}
              isBuying={isBuying}
              setPopupAfterTrade={setPopupAfterTrade}
              companyName={companyName}
            />
          ) : (
            <PanelBuySellStockFormSell
              setTotalCost={setTotalCost}
              setTradeQuantity={setTradeQuantity}
              currentBalance={currentBalance}
              totalCost={totalCost}
              setCurrentBalance={setCurrentBalance}
              dispatch={dispatch}
              currentBalanceAction={currentBalanceAction}
              symbol={symbol}
              tradeQuantity={tradeQuantity}
              stockPriceChange={stockPriceChange}
              isSelect={isSelect}
              clickSelectHandler={clickSelectHandler}
              optionSelected={optionSelected}
              FontAwesomeIcon={FontAwesomeIcon}
              faAngleDown={faAngleDown}
              exitPopUpShadow={exitPopUpShadow}
              sharesSelectedHandler={sharesSelectedHandler}
              shares={shares}
              dollarsSelectedHandler={dollarsSelectedHandler}
              dollars={dollars}
              PanelBuySellStockDollars={PanelBuySellStockDollars}
              stockCurrentPrice={stockCurrentPrice}
              PanelBuySellStockShares={PanelBuySellStockShares}
              setIsBuying={setIsBuying}
              isBuying={isBuying}
              quantityOfCurrentStock={quantityOfCurrentStock}
              totalCostToString={totalCostToString}
              setToTalCostToString={setToTalCostToString}
              showPopupNotEnoughShare={showPopupNotEnoughShare}
              isTradeQuantityGreaterThanQuantityOfCurrentStock={
                isTradeQuantityGreaterThanQuantityOfCurrentStock
              }
              setIsTradeQuantityGreaterThanQuantityOfCurrentStock={
                setIsTradeQuantityGreaterThanQuantityOfCurrentStock
              }
              indexOfCurrentStockInPositions={indexOfCurrentStockInPositions}
              setPopupAfterTrade={setPopupAfterTrade}
              companyName={companyName}
            />
          )}
        </div>
        <hr />
        <div
          className={
            stockPriceChange < 0
              ? "trade-panel-buying-power stonk-down"
              : "trade-panel-buying-power stonk-up"
          }
        >
          <span className="trade-panel-buying-power-txt">
            $
            {buyingPowerWithCommas.indexOf(".") < 0
              ? buyingPowerWithCommas
              : buyingPowerWithCommasSlicedFromDecimalPoint}{" "}
            buying power available
          </span>
        </div>
        {quantityOfCurrentStock > 0 && (
          <div>
            {" "}
            <hr />
            <div
              className={
                stockPriceChange < 0
                  ? "trade-panel-buying-power stonk-down"
                  : "trade-panel-buying-power stonk-up"
              }
            >
              <span className="trade-panel-buying-power-txt">
                {quantityOfCurrentStock > 1
                  ? "You are holding " +
                    quantityOfCurrentStock +
                    " shares of " +
                    symbol
                  : "You are holding " +
                    quantityOfCurrentStock +
                    " share of " +
                    symbol}
              </span>
            </div>
          </div>
        )}
      </div>
      <div
        className={
          stockPriceChange < 0 ? "fav-add stonk-down" : "fav-add stonk-up"
        }
      >
        {indexOfCurrentStockInPositions > -1 &&
          (isBuying ? (
            <button onClick={handleSetIsBuying}>Sell {symbol}</button>
          ) : (
            <button onClick={handleSetIsBuying}>Buy {symbol}</button>
          ))}
      </div>
      <div
        className={
          stockPriceChange < 0 ? "fav-add stonk-down" : "fav-add stonk-up"
        }
      >
        <button onClick={showPopUpList}>Watch {symbol}</button>
      </div>
    </div>
  );
};

export default PanelBuySellStock;
