import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import {
  createListAction,
  renameListAction,
} from "../store/actions/listAction";
import Emojis from "./Emojis";
import { isNotAddingList } from "../store/actions/isAddingListAction";
import { useParams } from "react-router-dom";
import {
  createWatchList,
  updateWatchListOnPanel,
  updateWatchListOnListPage,
} from "./_crudToMongoDB";

///////////////////////////////////////////////////////////////////////////// THIS COMPONENT IS ACTUALLY FOR creating AND renaming LIST
const FormCreateList = ({ isRenamingList, setIsRenamingList, list }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const [listName, setListName] = useState(isRenamingList ? list.listName : "");
  const [emoji, setEmoji] = useState(isRenamingList ? list.emoji : "🚀");
  const [tickers, setTickers] = useState(isRenamingList ? list.tickers : []);
  const [emojiActive, setEmojiActive] = useState(false);

  const initialWatchList = {
    listName,
    emoji,
    tickers,
  };
  const [watchList, setWatchList] = useState(initialWatchList);
  const editWatchList = (value) => {
    return setWatchList((prev) => {
      return { ...prev, ...value };
    });
  };

  const addNewListHandler = async (e) => {
    e.preventDefault();
    dispatch(isNotAddingList());

    if (isRenamingList) {
      const editedWatchList = { ...watchList };
      // update list in db
      params.id === undefined // this function is used in FavListPanel.js (using params) & List.js (using _id) => on FavListPanel.js: params is undefined
        ? updateWatchListOnPanel(list._id, editedWatchList)
        : updateWatchListOnListPage(params, editedWatchList);
      dispatch(renameListAction(listName, emoji, list._id));
      setIsRenamingList(false);
    } else {
      const listId = uuidv4();
      dispatch(createListAction(listName, emoji, listId));
      // When a post request is sent to the create url, we'll add a new watch list to the database.
      const newWatchList = { ...watchList };
      createWatchList(newWatchList);
      setWatchList(initialWatchList);
    }
  };

  const getInput = (e) => {
    setListName(e.target.value);
    editWatchList({ listName: e.target.value });
  };
  const exitPopUpEmoji = (e) => {
    const element = e.target;
    if (element.classList.contains("emoji-shadow")) {
      setEmojiActive(false);
    }
  };
  const exitPopUpList = () => {
    isRenamingList ? setIsRenamingList(false) : dispatch(isNotAddingList());
  };
  return (
    <form
      onSubmit={addNewListHandler}
      className="createlist-form"
      action=""
      id="form-addlist"
    >
      <div className="input-items">
        <button
          onClick={() => setEmojiActive(!emojiActive)} // on/off emoji list to choose emojis
          type="button"
          className="input-emoji"
        >
          {emoji}
        </button>
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
        />
      </div>
      <div className="form-buttons">
        <input
          className="form-button"
          type="submit"
          value={isRenamingList ? "Save" : "Create List"}
        />
        <button className="form-button" type="button" onClick={exitPopUpList}>
          {/* the <button> tag defaults to type="submit". If you change it to type="button" => Forms mishandle submit for Enter key: https://github.com/facebook/react/issues/2093 */}
          Cancel
        </button>
      </div>
      {emojiActive && (
        <div onClick={exitPopUpEmoji} className="emoji-shadow"></div>
      )}
      {emojiActive && (
        <div className="picker-emoji favlistpanel-emoji popuplists-emoji">
          <Emojis editWatchList={editWatchList} setEmoji={setEmoji} />
        </div>
      )}
    </form>
  );
};
export default FormCreateList;
