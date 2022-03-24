import FormCreateList from "./FormCreateList";

const RenameList = ({ isRenamingList, setIsRenamingList, list }) => {
  const exitPopUpRenameList = (e) => {
    const element = e.target;
    if (element.classList.contains("popup-shadow")) {
      setIsRenamingList(false);
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
