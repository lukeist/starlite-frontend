import FormCreateList from "./FormCreateList";
// import { useDispatch } from "react-redux";
// import { isNotRenamingList } from "../store/actions/isEditingListAction";

const RenameList = ({ isRenamingList, setIsRenamingList, list }) => {
  // const dispatch = useDispatch();
  // const [listName, setListName] = useState(list.listName);

  const exitPopUpRenameList = (e) => {
    const element = e.target;
    if (element.classList.contains("popup-shadow")) {
      setIsRenamingList(false);
      // setListName(list.listName);
    }
  };

  return (
    <div>
      <div>
        <div onClick={exitPopUpRenameList} className="popup-shadow"></div>
        <div className="listspanel-rename">
          <div>
            <h4>Edit List: {list.listName}</h4>
            <div className="createlistform-popup">
              <FormCreateList
                isRenamingList={isRenamingList}
                setIsRenamingList={setIsRenamingList}
                list={list}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenameList;
