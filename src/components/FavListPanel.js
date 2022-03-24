import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import FavListPanelsList from "./FavListPanelsList";
import { useDispatch } from "react-redux";
import { isAddingList } from "../store/actions/isAddingListAction";
import { getWatchListsAction } from "../store/actions/listAction";
import FormCreateList from "./FormCreateList";
import { useEffect, useState } from "react";
import axios from "axios";
import { watchListsFromDB } from "../api";
import { useNavigate, useParams } from "react-router-dom";

const FavListPanel = () => {
  const dispatch = useDispatch();
  const watchListsFromReduxState = useSelector(
    (state) => state.entities.watchLists
  );
  const { PopUpAddingList } = useSelector((state) => state.utilities);

  // This method fetches the watch lists from the database.
  useEffect(() => {
    const getWatchLists = async () => {
      const response = await watchListsFromDB;
      dispatch(getWatchListsAction(response.data));
    };
    getWatchLists();
    return;
  }, []);

  return (
    <div className="fav-list">
      <div className="fav-header">
        <h4>Watch Lists</h4>
        <FontAwesomeIcon
          onClick={() => dispatch(isAddingList())}
          className="fav-icon"
          icon={faPlusSquare}
        />
      </div>
      <hr />

      {PopUpAddingList ? <FormCreateList /> : ""}

      <div className="fav-items">
        {watchListsFromReduxState.map((list) => (
          <FavListPanelsList key={list._id} list={list} />
        ))}
      </div>
    </div>
  );
};

export default FavListPanel;
