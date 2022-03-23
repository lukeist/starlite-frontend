// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import {
  createListAction,
  renameListAction,
} from "../store/actions/listAction";
import Emojis from "./Emojis";
import { isNotAddingList } from "../store/actions/isAddingListAction";
import axios from "axios";
// import { isNotRenamingList } from "../store/actions/isEditingListAction";

const FormCreateList = ({ isRenamingList, setIsRenamingList, list }) => {
  // const { popupRenamingList } = useSelector(
  //   (state) => state.utilities.PopUpEditingList
  // );
  const dispatch = useDispatch();
  const [listName, setListName] = useState(isRenamingList ? list.listName : ""); //****** list.emoji needed to follow database
  const [emoji, setEmoji] = useState(isRenamingList ? list.emoji : "🚀"); //****** list.emoji needed to follow database
  const [emojiActive, setEmojiActive] = useState(false);

  const initialWatchList = {
    listName,
    emoji,
    tickers: [],
  };
  const [watchList, setWatchList] = useState(initialWatchList);
  const updateWatchList = (value) => {
    return setWatchList((prev) => {
      return { ...prev, ...value };
    });
  };

  const addNewListHandler = async (e) => {
    e.preventDefault();
    dispatch(isNotAddingList());
    const newWatchList = { ...watchList };
    if (isRenamingList) {
      //****** list.emoji needed to follow database
      list.emoji = emoji;
      list.listName = listName;
      dispatch(renameListAction(listName, emoji, list.id));
      // dispatch(isNotRenamingList());
      setIsRenamingList(false);
    } else {
      // const listId = uuidv4();
      // dispatch(createListAction(listName, emoji, listId));
      try {
        await axios.post(
          `${process.env.REACT_APP_STARLITE_API}/watchlists/add`,
          newWatchList
        );
      } catch (error) {
        console.log(error);
        return;
      }
      setWatchList(initialWatchList);
      // setListName("");
      // setEmoji("🚀");
    }
  };

  // const addNewListHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(isNotAddingList());
  //   // if RENAME a list or CREATE a new list
  //   if (isRenamingList) {
  //     list.emoji = emoji;
  //     list.listName = listName;
  //     dispatch(renameListAction(listName, emoji, list.id));
  //     // dispatch(isNotRenamingList());
  //     setIsRenamingList(false);
  //   } else {
  //     const listId = uuidv4();
  //     dispatch(createListAction(listName, emoji, listId));
  //   }
  // };
  const getInput = (e) => {
    setListName(e.target.value);
    updateWatchList({ listName: e.target.value });
  };
  const exitPopUpEmoji = (e) => {
    const element = e.target;
    if (element.classList.contains("emoji-shadow")) {
      setEmojiActive(false);
    }
  };
  const exitPopUpList = () => {
    isRenamingList ? setIsRenamingList(false) : dispatch(isNotAddingList());
    // setListName(list.listName);
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
          <Emojis updateWatchList={updateWatchList} setEmoji={setEmoji} />
        </div>
      )}
    </form>
  );
};
export default FormCreateList;
