import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import News from "../components/News";
import PanelBuySellStock from "../components/PanelBuySellStock";
import PopUpLists from "../components/PopUpLists";
import companyMarketCap from "../components/_getCompanyMarketCap";
import { useDispatch } from "react-redux";
import { stocksAction } from "../store/actions/stocksAction";
import { useState } from "react";
import Message from "../components/Messages-Message";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import decimalConverter from "../components/_getDecimal";
import { api_key_websocket } from "../api";

const Stock = () => {
  const { company, quote, companyNews, stockActive } = useSelector(
    (state) => state.entities.stock
  );
  // Market Cap display
  const { PopUpFavLists } = useSelector((state) => state.utilities);

  const stockCurrentPrice = numberWithCommas(decimalConverter(quote.c, 100));
  const stockPriceChange = decimalConverter(quote.d, 100);
  // doesn't work because stock hasn't loaded yet
  // const stockPriceChangeWithDollarSignInTheMiddle =
  //   stockPriceChange.toString().slice(0, 1) +
  //   "$" +
  //   stockPriceChange.toString().slice(1);
  const stockPercentChange = decimalConverter(quote.dp, 100);
  const todayHigh = decimalConverter(quote.h, 100);
  const todayLow = decimalConverter(quote.l, 100);
  const todayOpen = decimalConverter(quote.o, 100);
  const previousClose = decimalConverter(quote.pc, 100);
  const sixLatestNews = 6;

  //////////////// PUT SToCK TO STATE WHEN ENTER SYMBOL INTo BROWSER
  const location = useLocation();
  const startPositionOfSymbolInLocationPathname = 8; // for example: location.pathname = /stocks/GME
  const getSymbolFromBrowser = location.pathname
    .slice(startPositionOfSymbolInLocationPathname)
    .toUpperCase();
  const dispatch = useDispatch();
  useEffect(() => {
    // useEffect only when pathname has /stocks/xxx, not /lists/xxx or anything else
    if (location.pathname.includes("stocks")) {
      dispatch(stocksAction(getSymbolFromBrowser));
      return;
    }
  }, [location]);

  const [popupAfterTrade, setPopupAfterTrade] = useState(false);
  const { tradeMessages } = useSelector((state) => state.messages);
  const firstIndexOfTradeMessages = 0;
  const notificationMessage = tradeMessages[firstIndexOfTradeMessages];

  ////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////// WEB SOCKET
  ////////////////////////////////////////////////////////////////
  const symbol = company.ticker;
  // const symbol = "BINANCE:BTCUSDT";

  const iniState = { current: 0 };
  const [stockPrice, setStockPrice] = useState(iniState);
  useEffect(() => {
    console.log("MOUNTING");
    const socket = new WebSocket(`wss://ws.finnhub.io${api_key_websocket}`);
    // Connection opened -> Subscribe
    socket.addEventListener("open", function (event) {
      socket.send(JSON.stringify({ type: "subscribe", symbol }));
      console.log("OPENED");
    });

    // Listen for messages
    socket.addEventListener("message", function (event) {
      const resJSON = JSON.parse(event.data);
      const dataAtFirstIndex = resJSON.data;

      let price;
      dataAtFirstIndex === undefined
        ? (price = stockCurrentPrice)
        : (price = resJSON?.data[0].p);

      // console.log(resJSON);
      console.log(price);
      if (!resJSON) {
        console.log("invalid data");
        return;
      }
      if (!resJSON.data) {
        price = stockCurrentPrice;
        console.log("no data received, might have been only a ping");
        return;
      }
      // take first entry of received data to show that it works

      // const updateChunk = resJSON.data.map(
      //   (d) =>
      //     `symbol: ${d?.s}, price: ${d?.p}, amount: ${d?.v}, time: ${new Date(
      //       d?.t
      //     ).toLocaleTimeString()}`
      // );
      // setStockPrice((prevSP) => [...prevSP, ...updateChunk]);

      if (price === undefined) {
        setStockPrice((prev) => {
          return { ...prev, ...{ current: stockCurrentPrice } };
        });
      } else {
        setStockPrice((prev) => {
          return { ...prev, ...{ current: price } };
        });
      }
    });
  }, []);
  ////////////////////////////////////////////////////////////////
  return (
    <div className="home">
      {PopUpFavLists ? <PopUpLists quote={quote} company={company} /> : ""}
      {stockActive ? (
        <div className="home-body">
          <div className="stock-body">
            <div className="quote">
              <div className="quote-header">
                <h3
                  onClick={() =>
                    console.log(company.ticker, notificationMessage)
                  }
                >
                  {company.name}
                </h3>

                <h1
                  className={
                    stockPriceChange > 0
                      ? "quote-current stonk-up"
                      : "quote-current stonk-down"
                  }
                >
                  {stockPrice.current === 0
                    ? "$" + stockCurrentPrice
                    : "$" +
                      numberWithCommas(
                        decimalConverter(stockPrice.current, 100)
                      )}

                  {/* //****************************** // use this when not using websocket */}
                  {/* ${stockCurrentPrice} */}
                  {/* {stockPrice.current} */}
                </h1>
              </div>
              <p className="quote-change">
                {stockPriceChange < 0 ? (
                  <span>
                    {stockPriceChange.toString().slice(0, 1) +
                      "$" +
                      stockPriceChange.toString().slice(1)}{" "}
                    ({stockPercentChange}
                    %)
                  </span>
                ) : (
                  <span>
                    +${stockPriceChange} (+{stockPercentChange}
                    %)
                  </span>
                )}
                <span> Today</span>
              </p>
            </div>
            <div className="basic-financials">
              <h3>Key statistics</h3>
              <hr />
              <ul>
                <li>
                  <dt>High price of the day:</dt>
                  <dd>${todayHigh}</dd>
                </li>
                <li>
                  <dt>Low price of the day:</dt> <dd>${todayLow}</dd>
                </li>
                <li>
                  <dt>Open price of the day:</dt> <dd>${todayOpen}</dd>
                </li>
                <li>
                  <dt>Previous close price:</dt> <dd>${previousClose}</dd>
                </li>
                <li>
                  <dt>Market Cap: </dt>
                  <dd>
                    {
                      companyMarketCap(company)
                      // marketCapLength > 3
                      //   ? marketCapLength > 6
                      //     ? marketCapTrillion
                      //     : marketCapBillion
                      //   : marketCapMillion
                    }
                  </dd>
                </li>
              </ul>
            </div>
            <div className="company-info">
              <h3>About</h3>
              <hr />
              <ul>
                <li>
                  <dt>{company.name}</dt>
                  <dd>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    ratione, exercitationem maiores officiis voluptate quo
                    facilis dignissimos corrupti at quod perspiciatis soluta
                    ipsam magnam, assumenda consequatur neque cupiditate esse
                    praesentium.
                  </dd>
                </li>
                <li>
                  <img src={company.logo} alt="" />
                </li>
                <li>
                  <dt>Ticker: </dt>
                  <dd>{company.ticker}</dd>
                </li>
                <li>
                  <dt>Industry: </dt>
                  <dd>{company.finnhubIndustry}</dd>
                </li>
              </ul>
            </div>
            <div className="company-news">
              <h3>Company News</h3>
              <hr />
              {companyNews.slice(0, sixLatestNews).map((news) => (
                <News news={news} key={news.id} />
              ))}
              {/* <a href="#">See more</a> */}
              <span>See more</span>
            </div>
          </div>
          <div className="trade-body">
            <div className="trade-container">
              <PanelBuySellStock
                stockCurrentPrice={stockCurrentPrice}
                stockPriceChange={stockPriceChange}
                company={company}
                setPopupAfterTrade={setPopupAfterTrade}
              />
            </div>
          </div>

          {popupAfterTrade && (
            <div className="list-page-popup-after-remove-stock">
              <span>
                <Message
                  key={notificationMessage.id}
                  tradeMessage={notificationMessage}
                />
              </span>{" "}
              <FontAwesomeIcon
                onClick={() => setPopupAfterTrade(false)}
                className="exit-icon"
                icon={faWindowClose}
                alt="Remove Stonk From List"
              />
            </div>
          )}
        </div>
      ) : (
        <div className="blobs-loading">
          <div className="blobs">
            <div className="blob-center"></div>
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                  result="goo"
                />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>
        </div>
      )}
    </div>
  );
};
export default Stock;
