import { useState } from "react";
import { useDispatch } from "react-redux";
import { renameListAction } from "../store/actions/listAction";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faEraser } from "@fortawesome/free-solid-svg-icons";
import Emojis from "../components/Emojis";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import { starliteAPI } from "../api";

const ListHeader = ({
  listId,
  currentList,
  emoji,
  setEmoji,
  listName,
  setListName,
  setIsDeletingList,
}) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = useParams();
  const [cogDelete, setCogDelete] = useState(false);
  const [emojiActive, setEmojiActive] = useState(false);
  const [watchList, setWatchList] = useState(currentList);

  const updateWatchList = (value) => {
    return setWatchList((prev) => {
      return { ...prev, ...value };
    });
  };
  // This will send a post request to update the data in the database.
  const submitUpdatedWatchListToDB = async () => {
    const editedList = {
      ...watchList,
    };
    location.state = { ...watchList };
    try {
      await axios.post(
        `${starliteAPI}/update-watchlist/${params.id}`,
        editedList
      );
    } catch (error) {
      console.log(error);
      return;
    }
  };
  // update currentList's Emoji
  // const submitNewListViaEmojiHandler = () => {
  //   // currentList.emoji = emoji;
  //   // currentList.listName = listName;
  //   console.log(emoji);
  //   dispatch(renameListAction(listName, emoji, listId));
  //   // updateWatchList({ emoji }); // from setEmoji in Emojis.js
  // };
  const exitPopUpEmoji = (e) => {
    const element = e.target;
    if (element.classList.contains("emoji-shadow")) {
      setEmojiActive(false);
      dispatch(renameListAction(listName, emoji, listId));
      submitUpdatedWatchListToDB();
      // submitNewListViaEmojiHandler();
    }
  };

  // update currentList's listName
  const getInput = (e) => {
    setListName(e.target.value);
    updateWatchList({ listName: e.target.value });
  };
  const submitNewList = (e) => {
    e.preventDefault();
    submitUpdatedWatchListToDB();
    dispatch(renameListAction(listName, emoji, listId));
    // currentList.emoji = emoji;
    // currentList.listName = listName;
  };

  // Delete currentList
  const exitPopUpCogDelete = (e) => {
    const element = e.target;
    if (element.classList.contains("listedit-shadow")) {
      setCogDelete(false);
    }
  };
  const popUpConfirmDelete = () => {
    setCogDelete(false);
    setIsDeletingList(true);
  };

  return (
    <div className="list-header">
      <button onClick={() => console.log(watchList)}>sdfasdfasdf</button>
      <form
        onSubmit={submitNewList}
        className="listpage-form"
        action=""
        id="form-addlist"
      >
        <div className="input-items">
          <button
            onClick={() => setEmojiActive(!emojiActive)}
            type="button"
            className="input-emoji"
          >
            {emoji}
          </button>
          <div className="input-group">
            <input
              className="input-name"
              placeholder="List Name"
              onKeyDown={
                (e) => (e.key === 27 ? () => console.log(e) : "") // Press ESC to exit Pop-up
              }
              onChange={getInput}
              type="text"
              minLength="1"
              maxLength="68"
              required
              value={listName}
              onBlur={submitNewList}
            />
            <FontAwesomeIcon
              onClick={() => setCogDelete(true)}
              className="deletelist-icon"
              icon={faCog}
            />
            <div className="cog-popup">
              {cogDelete && (
                <div
                  onClick={exitPopUpCogDelete}
                  className="listedit-shadow cog-shadow"
                ></div>
              )}
              {cogDelete && (
                <div className="lists-edit cog-retransform">
                  <div onClick={popUpConfirmDelete} className="list-edit">
                    <FontAwesomeIcon className="edit-icon" icon={faEraser} />
                    <span>Delete List</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <p className="input-sub">
            {currentList.tickers.length > 1
              ? currentList.tickers.length + ` items`
              : currentList.tickers.length + ` item`}
          </p>
          {currentList.tickers.length === 0 && (
            <h4 className="list-header-sub-text">This list is still empty.</h4>
          )}
        </div>
        {emojiActive && (
          <div onClick={exitPopUpEmoji} className="emoji-shadow"></div>
        )}
        {emojiActive && (
          <div className="picker-emoji list-emoji">
            <Emojis setEmoji={setEmoji} updateWatchList={updateWatchList} />
          </div>
        )}
      </form>
    </div>
  );
};
export default ListHeader;
