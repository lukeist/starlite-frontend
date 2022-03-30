import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faSquare } from "@fortawesome/free-solid-svg-icons";
import {
  addTickerToListAction,
  removeTickerFromListAction,
} from "../store/actions/listAction";
import companyMarketCap from "./_getCompanyMarketCap";
import decimalConverter from "./_getDecimal";
import axios from "axios";
import { postWatchList, updateWatchList, updateWatchListTickers } from "../api";
const PopUpAddedList = ({ company, watchList, quote }) => {
  const companyName = company.name;
  const stockCurrentPrice = quote.c;
  const stockPercentChange = decimalConverter(quote.dp, 100);
  const stockPriceChange = decimalConverter(quote.d, 100);
  const stockPreviousClose = decimalConverter(quote.pc, 100);
  const marketCap = companyMarketCap(company);

  const stock = {
    companyName,
    symbol: company.ticker,
    // stockCurrentPrice,
    // stockPercentChange,
    // stockPriceChange,
    // stockPreviousClose,
  };

  const dispatch = useDispatch();

  const indexOfCurrentTicker = watchList.tickers.findIndex(
    (x) => x.symbol === company.ticker
  );
  ////////////////////// don't understand why this works for adding/removing item to/from array then dispatching
  const listWithTickers = {
    // listname: list.listName,
    // emoji: list.emoji,
    tickers: watchList.tickers,
  };

  const addStockToList = async (listId) => {
    if (indexOfCurrentTicker > -1) {
      watchList.tickers.splice(indexOfCurrentTicker, 1);
      dispatch(removeTickerFromListAction(stock, listId));
      // delete // stockCurrentPrice, stockPercentChange,stockPriceChange, stockPreviousClose BEFORE adding tickers back to database
      for (let i of listWithTickers.tickers) {
        delete i.stockCurrentPrice;
        delete i.stockPercentChange;
        delete i.stockPriceChange;
        delete i.stockPreviousClose;
      }
      // use this to DELETE ticker in database
      //// update tickers after removing ticker with splice above
      try {
        await axios.post(
          `${updateWatchListTickers}/${listId}`,
          listWithTickers
        );
      } catch (error) {
        console.log(error);
        return;
      }
    } else {
      watchList.tickers.push(stock);
      dispatch(addTickerToListAction(stock, listId));
      // use this to CREATE ticker in database
      //// update new ticker - to watch list
      try {
        await axios.post(
          `${updateWatchListTickers}/${listId}`,
          listWithTickers
        );
      } catch (error) {
        console.log(error);
        return;
      }
    }
  };

  return (
    <li
      key={watchList._id}
      onClick={() => addStockToList(watchList._id)}
      className="lists-button"
    >
      {indexOfCurrentTicker > -1 ? (
        <FontAwesomeIcon className="check-icon" icon={faCheckSquare} />
      ) : (
        <FontAwesomeIcon className="check-icon" icon={faSquare} />
      )}
      <h4 className="list-emoji">{watchList.emoji}</h4>
      <div className="list-name">
        <h4>{watchList.listName}</h4>
      </div>
    </li>
  );
};

export default PopUpAddedList;
