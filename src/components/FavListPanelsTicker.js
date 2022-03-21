import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import decimalConverter from "./_getDecimal";
import numberWithCommas from "./_getCommasAsThousandsSeparators ";
const FavListPanelsTicker = ({ stock }) => {
  ///////////////////////////////////////////////////  streaming price using websocket
  const symbol = stock.symbol;
  // const symbol = "BINANCE:BTCUSDT";

  ///////////////////////////////////////////////////

  const dispatch = useDispatch();
  const { streaming } = useSelector((state) => state.entities);
  const stockCurrentPrice = numberWithCommas(
    decimalConverter(stock.stockCurrentPrice, 100)
  );
  const stockPercentChange = decimalConverter(stock.stockPercentChange, 100);
  // const [currentPrice, setCurrentPrice] = useState(0);

  // const thisBlock = streaming.filter((item) => item.symbol === symbol);
  // const thisStock = thisBlock[0];
  // const currentPrice = 0;
  // if (thisBlock.length > 0) {
  //   currentPrice = thisStock.price;
  // }

  // useEffect(() => {
  //   const ssss = getStreamingPrice(symbol);
  //   // dispatch(currentPriceStreamingAction(symbol, ssss));
  //   // setCurrentPrice(ssss);
  //   // console.log(ssss);
  // }, []);
  // const [sPrice, setSPrice] = useState(0);
  // const [stockPrice, setStockPrice] = useState([]);

  // // useEffect(() => {
  // //   console.log("MOUNTING");
  // //   const socket = new WebSocket(
  // //     "wss://ws.finnhub.io?token=c7d2eiqad3idhma6grrg"
  // //   );
  // //   const crypto = "BINANCE:BTCUSDT";
  // //   // Connection opened -> Subscribe
  // //   socket.addEventListener("open", function (event) {
  // //     socket.send(JSON.stringify({ type: "subscribe", symbol: crypto }));
  // //     console.log("OPENED");
  // //   });

  // //   // Listen for messages
  // //   socket.addEventListener("message", function (event) {
  // //     const resJSON = JSON.parse(event.data);
  // //     console.log(resJSON.data);
  // //     if (!resJSON) {
  // //       console.log("invalid data");
  // //       return;
  // //     }
  // //     if (!resJSON.data) {
  // //       console.log("no data received, might have been only a ping");
  // //       return;
  // //     }
  // //     // take first entry of received data to show that it works

  // //     const updateChunk = resJSON.data.map(
  // //       (d) =>
  // //         `symbol: ${d?.s}, price: ${d?.p}, amount: ${d?.v}, time: ${new Date(
  // //           d?.t
  // //         ).toLocaleTimeString()}`
  // //     );

  // //     setStockPrice((prevSP) => [...prevSP, ...updateChunk]);
  // //     // dispatch(currentPriceStreamingInListAction(symbol, resJSON?.data[0].p));

  // //     // setStockPrice(resJSON.data[0].p);
  // //   });
  // // }, []);

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
          <li
            className={
              stockPercentChange > 0
                ? "fav-graph stonk-up"
                : "fav-graph stonk-down"
            }
          >
            Fancy Graphs
          </li>
          <li className="fav-quote">
            {/* <dt>${stockPrice}</dt>  FOR WHEN USING SOCKET*/}
            <dt>${stockCurrentPrice}</dt>
            {stockPercentChange < 0 ? (
              <dd className="stonk-down">{stockPercentChange}%</dd>
            ) : (
              <dd className="stonk-up">+{stockPercentChange}%</dd>
            )}
          </li>
        </ul>
      </div>
    </Link>
  );
};

export default FavListPanelsTicker;
