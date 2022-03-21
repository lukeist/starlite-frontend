import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  TableOfStock,
  TableofStockHeader,
} from "../components/List-TableOfStock";
import FavListPanel from "../components/FavListPanel";
import DeleteList from "../components/FavList-DeleteList";
import { useEffect } from "react";
import ListHeader from "../components/List-Header";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const List = () => {
  const location = useLocation();
  const startPositionOfListIdInLocationPathname = 7; // for example: location.pathname = /lists/1d9fa494-8a3f-4951-a99b-e3d27576aae9
  const listId = location.pathname.slice(
    startPositionOfListIdInLocationPathname
  );
  // const listId = stringFromBrowser.slice(stringFromBrowser.indexOf("?"), 1);

  const { stockLists } = useSelector((state) => state.entities);
  const filterListfromListsToArray = stockLists.filter(
    (list) => list.id === listId
  );
  const firstListInArrayIndex = 0;
  const [currentList, setCurrentList] = useState(
    filterListfromListsToArray[firstListInArrayIndex]
  );
  const [listName, setListName] = useState(currentList.listName);
  const [emoji, setEmoji] = useState(currentList.emoji);
  const [isDeletingList, setIsDeletingList] = useState(false);
  const [popupAfterDeleteStock, setPopupAfterDeleteStock] = useState(false);
  const [stockInPopupAfterDeleteStock, setStockInPopupAfterDeleteStock] =
    useState("");

  //////////////// SET CURRENT LIST WHEN CLICK ON LIST PANEL's ITEM on LIST PAGE
  useEffect(() => {
    // useEffect only when pathname has /lists/xxx, not /stocks/xxx or anything else
    if (location.pathname.includes("lists")) {
      const listFromBrowser = filterListfromListsToArray[firstListInArrayIndex];
      setCurrentList(listFromBrowser);
      setListName(listFromBrowser.listName);
      setEmoji(listFromBrowser.emoji);
    }
  }, [location]);
  ////////////////////////////////////////////////////////////////////////////////

  //////////////// ANIMATE THE HEADER WHEN SCROLL TO A CERTAIN POINT https://stackoverflow.com/questions/32856341/pure-js-add-and-remove-toggle-class-after-scrolling-x-amount/32856377
  //////////////// https://stackoverflow.com/questions/56541342/react-hooks-why-is-current-null-for-useref-hook
  const headerRef = useRef(null);
  const [refVisible, setRefVisible] = useState(false);

  const headerClassName = headerRef.current;
  const add_class_on_scroll = () => {
    headerClassName.classList.value = "header-main header-main-animate-scroll";
  };
  const remove_class_on_scroll = () => {
    headerClassName.classList.value = "header-main";
  };

  window.addEventListener("scroll", () => {
    const scrollpos = window.pageYOffset;
    if (refVisible) {
      if (scrollpos > 80) {
        add_class_on_scroll();
      } else {
        remove_class_on_scroll();
      }
    }
  });
  ////////////////////////////////////////////////////////////////////////////////
  return (
    <div className="home">
      {/* {stockActive ? ( */}
      <div className="home-body">
        <div className="list-body">
          <div
            className="header-main"
            id="header-main"
            ref={(element) => {
              headerRef.current = element;
              setRefVisible(!!element);
            }}
          >
            <ListHeader
              listId={listId}
              currentList={currentList}
              emoji={emoji}
              setEmoji={setEmoji}
              listName={listName}
              setListName={setListName}
              setIsDeletingList={setIsDeletingList}
            />
          </div>

          <div className="header-sticky">
            <ListHeader
              listId={listId}
              currentList={currentList}
              emoji={emoji}
              setEmoji={setEmoji}
              listName={listName}
              setListName={setListName}
              setIsDeletingList={setIsDeletingList}
            />
          </div>
          {currentList.tickers.length > 0 && (
            <div className="table-row">
              <TableofStockHeader />
              {currentList.tickers.map((stock) => (
                <TableOfStock
                  key={stock.symbol}
                  stock={stock}
                  currentList={currentList}
                  setPopupAfterDeleteStock={setPopupAfterDeleteStock}
                  setStockInPopupAfterDeleteStock={
                    setStockInPopupAfterDeleteStock
                  }
                />
              ))}
            </div>
          )}
        </div>
        <div className="fav-container">
          <FavListPanel />
        </div>
        {/* delete list alert / confirmation */}
        {isDeletingList && (
          <DeleteList
            setIsDeletingList={setIsDeletingList}
            list={currentList}
          />
        )}
        {popupAfterDeleteStock && (
          <div className="list-page-popup-after-remove-stock">
            <span>
              {stockInPopupAfterDeleteStock} was removed from "
              {currentList.listName}"
            </span>{" "}
            <FontAwesomeIcon
              onClick={() => setPopupAfterDeleteStock(false)}
              className="exit-icon"
              icon={faWindowClose}
              alt="Remove Stonk From List"
            />
          </div>
        )}
      </div>

      {/* ) : (
        <div>
          <div class="blobs">
            <div class="blob-center"></div>
            <div class="blob"></div>
            <div class="blob"></div>
            <div class="blob"></div>
            <div class="blob"></div>
            <div class="blob"></div>
            <div class="blob"></div>
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
      )} */}
    </div>
  );
};
export default List;
