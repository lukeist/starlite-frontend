import { useState } from "react";
import { useDispatch } from "react-redux";
import { renameListAction } from "../store/actions/listAction";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faEraser } from "@fortawesome/free-solid-svg-icons";
import Emojis from "../components/Emojis";

const ListHeader = ({
  listId,
  currentList,
  emoji,
  setEmoji,
  listName,
  setListName,
  setIsDeletingList,
}) => {
  const [cogDelete, setCogDelete] = useState(false);
  const [emojiActive, setEmojiActive] = useState(false);
  const dispatch = useDispatch();
  const submitNewListViaEmojiHandler = () => {
    currentList.emoji = emoji;
    currentList.listName = listName;
    dispatch(renameListAction(listName, emoji, listId));
  };

  const getInput = (e) => {
    setListName(e.target.value);
  };
  const exitPopUpEmoji = (e) => {
    const element = e.target;
    if (element.classList.contains("emoji-shadow")) {
      setEmojiActive(false);
      submitNewListViaEmojiHandler();
    }
  };
  const submitNewListHandler = (e) => {
    e.preventDefault();
    currentList.emoji = emoji;
    currentList.listName = listName;
    dispatch(renameListAction(listName, emoji, listId));
  };

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
      <form
        onSubmit={submitNewListHandler}
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
              onBlur={submitNewListHandler}
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
            <h4 className="list-header-sub-text">
              This list is empty, like your life.
            </h4>
          )}
        </div>
        {emojiActive && (
          <div onClick={exitPopUpEmoji} className="emoji-shadow"></div>
        )}
        {emojiActive && (
          <div className="picker-emoji list-emoji">
            <Emojis setEmoji={setEmoji} />
          </div>
        )}
      </form>
    </div>
  );
};
export default ListHeader;
