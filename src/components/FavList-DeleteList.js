// import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getWatchLists } from "../api";
import {
  getWatchListsAction,
  removeListAction,
} from "../store/actions/listAction";
import { deleteWatchList } from "./_crudToMongoDB";

const DeleteList = ({ setIsDeletingList, list }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const paramsId = params.id;

  const deleteListHandler = async () => {
    setIsDeletingList(false);
    // delete the selected list
    try {
      await axios.delete(
        `${process.env.REACT_APP_STARLITE_API}/delete-watchlist/${list._id}`
      );
    } catch (error) {
      console.log(error);
      return;
    }
    // get all lists from the database
    const response = await axios.get(getWatchLists);
    const newWatchListsAfterDeleting = response.data;
    // dispatch all lists to current state
    dispatch(getWatchListsAction(newWatchListsAfterDeleting));

    // look for current viewing list's index (current active in the browser): if the list is not in the newWatchListsAfterDeleting anymore (index === -1), then navigate back to homepage
    const indexOfCurrentList = newWatchListsAfterDeleting.findIndex(
      (currentList) => currentList._id === paramsId
    );
    indexOfCurrentList < 0 && navigate("/");
  };

  const exitPopUpDeleteList = (e) => {
    const element = e.target;
    if (element.classList.contains("popup-shadow")) {
      setIsDeletingList(false);
    }
  };

  // delete list if current is on PAGE List then after delete this list, go to home page
  return (
    <div onClick={exitPopUpDeleteList} className="popup-shadow">
      <form
        onSubmit={deleteListHandler}
        action=""
        className="lists-panel confirm-list"
      >
        <div>
          <p className="confirm-txt">
            Are you sure you want to delete "
            <span className="confirm-listname">{list.listName}</span>
            "?
          </p>
        </div>
        <div className="confirm-buttons">
          <input
            className="confirm-button delete-input"
            type="submit"
            value={`Delete ` + list.listName}
          />
          <button
            type="button"
            className="confirm-button delete-button"
            onClick={() => setIsDeletingList(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeleteList;
