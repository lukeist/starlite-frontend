import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import decimalConverter from "./_getDecimal";
import numberWithCommas from "./_getCommasAsThousandsSeparators ";
import { api_key_websocket } from "../api";
const FavListPanelsTicker = ({ stock }) => {
  ///////////////////////////////////////////////////  streaming price using websocket
  const symbol = stock.symbol; //****************************** // use this when not using websocket
  // // const symbol = "BINANCE:BTCUSDT";
  // ///////////////////////////////////////////////////

  const stockCurrentPrice = numberWithCommas(
    decimalConverter(stock.stockCurrentPrice, 100)
  );
  const stockPercentChange = decimalConverter(stock.stockPercentChange, 100);
  const stockPriceChange = stock.stockPriceChange;
  // // ////////////////////////////////////////////////////////////////
  // // //////////////////////////////////////////////////////////////// WEB SOCKET
  // // ////////////////////////////////////////////////////////////////
  // const iniState = { current: 0 };
  // const [stockPrice, setStockPrice] = useState(iniState);
  // useEffect(() => {
  //   console.log("MOUNTING");
  //   const socket = new WebSocket(`wss://ws.finnhub.io${api_key_websocket}`);
  //   // Connection opened -> Subscribe
  //   socket.addEventListener("open", function (event) {
  //     socket.send(JSON.stringify({ type: "subscribe", symbol }));
  //     console.log("OPENED");
  //   });

  //   // Listen for messages
  //   socket.addEventListener("message", function (event) {
  //     const resJSON = JSON.parse(event.data);
  //     const dataAtFirstIndex = resJSON.data;

  //     let price;
  //     dataAtFirstIndex === undefined
  //       ? (price = stockCurrentPrice)
  //       : (price = resJSON?.data[0].p);

  //     // console.log(resJSON);
  //     console.log(price);
  //     if (!resJSON) {
  //       console.log("invalid data");
  //       return;
  //     }
  //     if (!resJSON.data) {
  //       price = stockCurrentPrice;
  //       console.log("no data received, might have been only a ping");
  //       return;
  //     }
  //     // take first entry of received data to show that it works

  //     // const updateChunk = resJSON.data.map(
  //     //   (d) =>
  //     //     `symbol: ${d?.s}, price: ${d?.p}, amount: ${d?.v}, time: ${new Date(
  //     //       d?.t
  //     //     ).toLocaleTimeString()}`
  //     // );
  //     // setStockPrice((prevSP) => [...prevSP, ...updateChunk]);

  //     if (price === undefined) {
  //       setStockPrice((prev) => {
  //         return { ...prev, ...{ current: stockCurrentPrice } };
  //       });
  //     } else {
  //       setStockPrice((prev) => {
  //         return { ...prev, ...{ current: price } };
  //       });
  //     }
  //   });
  // }, []);
  ////////////////////////////////////////////////////////////////
  return (
    <Link to={`/stocks/${symbol}`}>
      <div className="fav-item">
        <ul
          // onClick={
          //   // () => dispatch(stocksAction(symbol))
          //   () => console.log(stockPrice)
          // }
          className="fav-stock"
        >
          <li className="fav-symbol">{symbol}</li>
          <li>
            <dt
              className={`fav-graph ${
                stockPercentChange > 0 ? "stonk-up-graph" : "stonk-down-graph"
              }`}
            >
              {stockPriceChange < 0 ? (
                <span>
                  {stockPriceChange.toString().slice(0, 1) +
                    "$" +
                    stockPriceChange.toString().slice(1)}
                </span>
              ) : (
                <span>+${stockPriceChange}</span>
              )}
            </dt>
            {stockPercentChange < 0 ? (
              <dd className="fav-current-percent">{stockPercentChange}%</dd>
            ) : (
              <dd className="fav-current-percent">+{stockPercentChange}%</dd>
            )}

            {/* {stockPriceChange < 0 ? (
              <span>
                {stockPriceChange.toString().slice(0, 1) +
                  "$" +
                  stockPriceChange.toString().slice(1)}
              </span>
            ) : (
              <span>+${stockPriceChange}</span>
            )} */}
          </li>
          <li className="fav-quote">
            {/* <dt>${stockPrice}</dt>  FOR WHEN USING SOCKET*/}
            <dt
              className={`fav-current-price ${
                stockPercentChange > 0
                  ? "stonk-up-padding"
                  : "stonk-down-padding"
              }`}
            >
              {/* ****************************** // use this when not using websocket */}
              {"$" + stockCurrentPrice}
              {/* {stockPrice.current === 0
                ? "$" + stockCurrentPrice
                : "$" + decimalConverter(stockPrice.current, 100)} */}
            </dt>
            {/* {stockPercentChange < 0 ? (
              <dd className="stonk-down">{stockPercentChange}%</dd>
            ) : (
              <dd className="stonk-up">+{stockPercentChange}%</dd>
            )} */}
          </li>
        </ul>
      </div>
    </Link>
  );
};

export default FavListPanelsTicker;
