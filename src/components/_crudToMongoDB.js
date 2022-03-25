import axios from "axios";
import { starliteAPI } from "../api";

export const updateWatchListOnListPage = async (params, watchList) => {
  try {
    await axios.post(`${starliteAPI}/update-watchlist/${params.id}`, watchList);
  } catch (error) {
    console.log(error);
    return;
  }
};

export const updateWatchListOnPanel = async (id, watchList) => {
  try {
    await axios.post(`${starliteAPI}/update-watchlist/${id}`, watchList);
  } catch (error) {
    console.log(error);
    return;
  }
};

export const createWatchList = async (watchList) => {
  try {
    await axios.post(
      `${process.env.REACT_APP_STARLITE_API}/watchlists/add`,
      watchList
    );
  } catch (error) {
    console.log(error);
    return;
  }
};

export const readWatchList = async (id) => {
  const response = await axios.get(
    `${process.env.REACT_APP_STARLITE_API}/watchlists/${id}`
  );

  return response.data;
};

export const readWatchLists = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_STARLITE_API}/watchlists/`
  );

  return response.data;
};

export const deleteWatchList = async (id) => {
  await axios.delete(
    `${process.env.REACT_APP_STARLITE_API}/delete-watchlist/${id}`
  );
  //   const newWatchList = watchLists.filter((list) => list._id !== id);
  //   return newWatchList;
};
