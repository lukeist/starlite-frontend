import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faSquare } from "@fortawesome/free-solid-svg-icons";
import {
  addTickerToListAction,
  removeTickerFromListAction,
} from "../store/actions/listAction";
import companyMarketCap from "./_getCompanyMarketCap";
import decimalConverter from "./_getDecimal";
const PopUpAddedList = ({ company, list, quote }) => {
  const companyName = company.name;
  const stockCurrentPrice = quote.c;
  const stockPercentChange = decimalConverter(quote.dp, 100);
  const marketCap = companyMarketCap(company);

  const stock = {
    companyName,
    symbol: company.ticker,
    stockCurrentPrice,
    stockPercentChange,
    marketCap,
    quoteStreaming: 0,
  };
  const dispatch = useDispatch();

  const indexOfCurrentTicker = list.tickers.findIndex(
    (x) => x.symbol === company.ticker
  );
  ////////////////////// don't understand why this works for adding/removing item to/from array then dispatching
  const addStockToList = (listId) => {
    if (indexOfCurrentTicker > -1) {
      list.tickers.splice(indexOfCurrentTicker, 1);
      dispatch(removeTickerFromListAction(stock, listId));
    } else {
      list.tickers.push(stock);
      dispatch(addTickerToListAction(stock, listId));
    }
  };

  return (
    <li
      key={list.id}
      onClick={() => addStockToList(list.id)}
      className="lists-button"
    >
      {indexOfCurrentTicker > -1 ? (
        <FontAwesomeIcon className="check-icon" icon={faCheckSquare} />
      ) : (
        <FontAwesomeIcon className="check-icon" icon={faSquare} />
      )}
      <h4 className="list-emoji">{list.emoji}</h4>
      <div className="list-name">
        <h4>{list.listName}</h4>
      </div>
    </li>
  );
};

export default PopUpAddedList;
