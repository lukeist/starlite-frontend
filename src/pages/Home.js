import { useEffect, useState } from "react";
import News from "../components/News";
import NewsMain from "../components/NewsMain";
import FavListPanel from "../components/FavListPanel";
import { newsAction } from "../store/actions/newsAction";
// import { useLocation } from "react-router";
// redux
import { useDispatch, useSelector } from "react-redux";
import getStocksForMyFirstList from "../components/_getStocksForMyFirstList";
import { getWatchListsAction } from "../store/actions/listAction";
import { watchListsFromDB } from "../api";
import { useLocation } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  // get data back from state
  const { general, newsActive } = useSelector((state) => state.entities.news);
  const generalWithoutBloomberg = general.filter(
    (key) => key.source !== "Bloomberg"
  );

  const firstIndexOfGeneralNews = 0;
  const secondIndexOfGeneralNews = 1;
  const eighthIndexOfGeneralNews = 7;
  ///////////////////////////////////////////////////////  Automatically fetch news /////////////////////////
  useEffect(() => {
    dispatch(newsAction());
  }, [dispatch]);
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////  Automatically add some stocks into 'My First List'
  // const firstIndexInList = 0;
  // const list = useSelector(
  //   (state) => state.entities.stockLists[firstIndexInList]
  // );
  // useEffect(() => {
  //   if (typeof list !== "undefined") {
  //     if (list.tickers.length === 0) {
  //       getStocksForMyFirstList(list, dispatch);
  //     }
  //   }
  // }, []);
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    dispatch(getWatchListsAction());
  }, [dispatch]);

  // const getWatchLists = async () => {
  //   const response = await watchListsFromDB;
  //   dispatch(getWatchListsAction(response.data));
  //   console.log("from home.js ", response.data);
  // };
  // useEffect(() => {
  //   console.log(location.pathname);
  //   const isLoaded = false;
  //   if (!isLoaded) {
  //     getWatchLists();
  //     return;
  //   }
  //   return () => {
  //     isLoaded = true;
  //   };
  // }, [dispatch]);

  return (
    <div className="home">
      {newsActive ? (
        <div className="home-body">
          <div className="news-body">
            {/* {stockActive ? (
            <Stock />
          ) : ( */}
            <div className="main-news">
              {generalWithoutBloomberg
                .slice(firstIndexOfGeneralNews, secondIndexOfGeneralNews)
                .map((mainnews) => (
                  <NewsMain key={mainnews.id} mainnews={mainnews} />
                ))}
            </div>
            {/* )} */}
            <div className="sub-news">
              <h3>Market News</h3>
              <hr />
              {generalWithoutBloomberg
                .slice(secondIndexOfGeneralNews, eighthIndexOfGeneralNews)
                .map((news) => (
                  <News key={news.id} news={news} />
                ))}
            </div>
          </div>
          {/* <div className="fav-body"> */}
          <div className="fav-container">
            <FavListPanel />
            {/* </div> */}
          </div>
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

export default Home;
