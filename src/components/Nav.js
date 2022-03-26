import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import NavSearchResult from "./NavSearchResult";
import { resetStockPage } from "../store/actions/stocksAction";
import { searchAction } from "../store/actions/searchAction";

const Nav = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchResultTop6, setSearchResultTop6] = useState([]);
  const searchInputUpperCase = searchInput.toUpperCase();

  const dispatch = useDispatch();
  const searchResult = useSelector((state) => state.entities.search.result);
  // const activeStock = useSelector((state) => state.entities.stock);

  /////////////////////////////////////////////////// when there is searchResult => useEffect to create arrays
  useEffect(() => {
    if (typeof searchResult === "undefined" || searchResult.length === 0) {
      // when "afdasfdsfasfdasdfasdf" in input or when there's nothing in input:

      setSearchResultTop6([]);
    } else {
      // when there are matches from input to data:
      setSearchResultTop6(searchResult.slice(0, 6));
    }
  }, [searchResult]);

  const getInput = (e) => {
    // console.log(resultSymbolLookupData(e.target.value));
    setSearchInput(e.target.value);
    dispatch(searchAction(e.target.value));
    if (e.target.value !== "") {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
  };

  const resetActive = () => {
    dispatch(resetStockPage());
  };

  return (
    <nav id="nav" className="nav">
      {/* <div className="logo-container"> */}
      <Link className="logo" onClick={resetActive} id="logo" to="/">
        moonlite
      </Link>
      {/* </div> */}
      {/* <button onClick={() => console.log(searchResult.slice(0, 6))}>
        aaaaa
      </button> */}
      <div className="search-field">
        <div className="search-bar">
          <FontAwesomeIcon
            className={
              isSearching ? "fasearch-icon fasearch-active" : "fasearch-icon"
            }
            icon={faSearch}
          />
          <input
            className={isSearching ? "search-input inactive" : "search-input"}
            placeholder="Search"
            onChange={getInput}
            type="text"
            value={searchInput}
            onBlur={() => setIsSearching(false)}
            onKeyDown={
              (e) =>
                e.key === 27 ? setIsSearching(true) : setIsSearching(false) // Press ESC to hide DropDown
            }
            // if string.length in input > -1 when click on input => show dropdown
            onClick={(e) =>
              // console.log(e.target.value.length)
              e.target.value.length < 1
                ? setIsSearching(false)
                : setIsSearching(true)
            }
          />
          {isSearching ? (
            <div className="search-dropdown">
              <h4>Stocks</h4>
              {typeof searchResult === "undefined" ||
              searchResult.length === 0 ? (
                <p>Loading results...</p> // If input = 'dkfasdfasdfasdf' => show 'no match found' /////// deal with this later
              ) : (
                <div className="search-result">
                  {searchResultTop6.map((stock) => (
                    <NavSearchResult
                      stock={stock}
                      key={stock.symbol}
                      searchInputUpperCase={searchInputUpperCase}
                      setIsSearching={setIsSearching}
                      setSearchInput={setSearchInput}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <ul className="menu-items">
        <li>
          <Link className="nav-portfolio" id="portfolio" to="/portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <Link className="nav-messages" id="portfolio" to="/messages">
            Messages
          </Link>
        </li>
        <li>
          <Link className="nav-account" id="portfolio" to="/account">
            Account
          </Link>
        </li>{" "}
      </ul>
      <div className="toggle-switch-mode">
        <input type="checkbox" id="time" />
        <label htmlFor="time">Night</label>
      </div>
    </nav>
  );
};

export default Nav;
