import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { stocksAction } from "../store/actions/stocksAction";
import decimalConverter from "./_getDecimal";

const FavStock = ({ stock }) => {
  const dispatch = useDispatch();
  const stockCurrentPrice = stock.quote.c;
  const stockPercentChange = decimalConverter(stock.quote.dp, 100);

  return (
    <Link to={`/stocks/${stock.symbol}`}>
      <div className="fav-item">
        <div
          onClick={() => dispatch(stocksAction(stock.symbol))}
          className="fav-stock"
        >
          <li className="fav-symbol">{stock.symbol}</li>
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
            <dt>${stockCurrentPrice}</dt>
            {stockPercentChange < 0 ? (
              <dd className="stonk-down">{stockPercentChange}%</dd>
            ) : (
              <dd className="stonk-up">+{stockPercentChange}%</dd>
            )}
          </li>
        </div>
      </div>
    </Link>
  );
};

export default FavStock;
