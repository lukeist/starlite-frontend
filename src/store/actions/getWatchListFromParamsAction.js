import axios from "axios";
import { getWatchLists } from "../../api";

export const getWatchListFromParamsAction = (listId) => async (dispatch) => {
  const response = await axios.get(getWatchLists);
  const filterListfromLists = response.data.filter(
    (list) => list._id === listId
  );
  const firstListInArrayIndex = 0;
  const list = filterListfromLists[firstListInArrayIndex];
  dispatch({
    type: "GET_TEMPORARY_WATCHLIST",
    payload: list,
  });
};
