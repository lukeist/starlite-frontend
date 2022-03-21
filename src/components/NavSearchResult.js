import { useDispatch } from "react-redux";
import { stocksAction } from "../store/actions/stocksAction";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
// import PopUpAddedList from "./PopUpAddedList";
// import { useSelector } from "react-redux";
// import { useState } from "react";

const ResultList = ({
  stock,
  searchInputUpperCase,
  setIsSearching,
  setSearchInput,
}) => {
  /////////////////////////////////////////////////// change the color of search result's string followed input (like search on Robinhood):
  ////////////////////// cut the string into an array with 3 items: [head string, searchInput, tail string]
  const changeResultChar = (terms) => {
    if (typeof terms === "undefined") {
      return searchInputUpperCase;
    } else {
      // copy string from searchResult[x].resultSymbol/description because api data is immute
      const stringCopy = (" " + terms).slice(1);
      // remove searchInput from string:
      const stringWithSearchInputRemoved = stringCopy.replace(
        searchInputUpperCase,
        "$"
      );
      // create tail and head strings
      const headString = stringWithSearchInputRemoved.slice(
        0,
        stringWithSearchInputRemoved.indexOf("$")
      );
      const tailString = stringWithSearchInputRemoved.slice(
        stringWithSearchInputRemoved.indexOf("$") + 1
      );
      if (terms.indexOf(searchInputUpperCase) > -1) {
        return [headString, searchInputUpperCase, tailString];
      } else {
        return stringCopy;
      }
    }
  };
  /////////////////////////////////////////////////// go to stock when click
  const dispatch = useDispatch();
  const getStockDetailHandler = () => {
    dispatch(stocksAction(stock.symbol));
    setIsSearching(false);
    setSearchInput("");
    // console.log(stock.symbol);
  };
  /////////////////////////////////////////////////// part 2: display lists to add to
  // const onMouseHoverForTemporaryUseBecauseItsSoSensitive = () => {
  //   dispatch(stocksAction(stock.symbol));
  // };
  // const { company, quote } = useSelector((state) => state.entities.stock);
  // const stockLists = useSelector((state) => state.entities.stockLists);

  return (
    <div className="test">
      <Link to={`/stocks/${stock.symbol}`}>
        <div
          // onMouseDown preventDefault makes onBlur comes after onClick: https://stackoverflow.com/questions/17769005/onclick-and-onblur-ordering-issue
          onMouseDown={(e) => e.preventDefault()}
          className="navsearch-result"
        >
          <ul className="detailed-result">
            <li onClick={getStockDetailHandler} className="symbol-result">
              {stock.symbol.indexOf(searchInputUpperCase) > -1 ? (
                <span>
                  <span>{changeResultChar(stock.symbol)[0].toLowerCase()}</span>
                  <span className="highlight-input">
                    {changeResultChar(stock.symbol)[1].toLowerCase()}
                  </span>
                  <span>{changeResultChar(stock.symbol)[2].toLowerCase()}</span>
                </span>
              ) : (
                stock.symbol
              )}
            </li>
            <li onClick={getStockDetailHandler} className="description-result">
              {stock.description.indexOf(searchInputUpperCase) > -1 ? (
                <span>
                  <span>
                    {changeResultChar(stock.description)[0].toLowerCase()}
                  </span>
                  <span className="highlight-input">
                    {changeResultChar(stock.description)[1].toLowerCase()}
                  </span>
                  <span>
                    {changeResultChar(stock.description)[2].toLowerCase()}
                  </span>
                </span>
              ) : (
                stock.description.toLowerCase()
              )}
            </li>
          </ul>
          {/* /////////////////////////////////////////////////// part 2: display lists to add to */}
          {/* <div className="addtolist-container">
            <FontAwesomeIcon
              className="addtolist-icon"
              // onMouseOut={() => setIsListPoppingUp(false)}
              onMouseOver={onMouseHoverForTemporaryUseBecauseItsSoSensitive}
              icon={faPlusCircle}
            />
            <div className="addtolist-list">
              {stockLists.map((list) => (
                <PopUpAddedList
                  key={list.id}
                  list={list}
                  quote={quote}
                  company={company}
                />
              ))}
            </div>
          </div> */}
        </div>
      </Link>
    </div>
  );
};

export default ResultList;
