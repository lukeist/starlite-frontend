import { useEffect, useState } from "react";
import News from "../components/News";
import NewsMain from "../components/NewsMain";
import FavListPanel from "../components/FavListPanel";
import { newsAction } from "../store/actions/newsAction";
// import { useLocation } from "react-router";
// redux
import { useDispatch, useSelector } from "react-redux";
import { getWatchListsAction } from "../store/actions/listAction";
import {
  getWatchListsToRedux,
  getTickersToWatchLists,
} from "../components/_getStocksForMyFirstList";

const Home = () => {
  const dispatch = useDispatch();
  // get data back from state
  const { general, newsActive } = useSelector((state) => state.entities.news);
  const watchLists = useSelector((state) => state.entities.watchLists);
  const generalWithoutBloomberg = general.filter(
    (key) => key.source !== "Bloomberg"
  );

  const firstIndexOfGeneralNews = 0;
  const secondIndexOfGeneralNews = 1;
  const eighthIndexOfGeneralNews = 7;
  ///////////////////////////////////////////////////////  Automatically fetch news & all watch lists /////////////////////////
  useEffect(() => {
    dispatch(newsAction());
    dispatch(getWatchListsAction());
    // console.log("this getwatchlist is from home");
    // if (watchLists.length === 0) {
    //   getWatchListsToRedux(dispatch).catch(console.error);
    //   console.log(watchLists.length);

    //   // console.log(watchLists);
    //   return;
    // }
    // if (watchLists.length > 0) {
    //   getTickersToWatchLists(watchLists, dispatch).catch(console.error);
    //   return;
    // }
  }, [dispatch]);
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////// suggestion to go to no backend version
  // const [popUpSuggestion, setPopUpSuggestion] = useState(false);
  // setTimeout(() => {
  //   setPopupAfterTrade(false);
  // }, 3000);

  return (
    <div className="home">
      {/* {popUpSuggestion && (
        <div>
          <p>
            This version with database from backend could be slow loading data
            from API.
          </p>
          <p>
            You could test the version without backend{" "}
            <a href="https://starlite-without-database.netlify.app/">here</a>.
          </p>
          <p>I appreciate it :)</p>
        </div>
      )} */}

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
