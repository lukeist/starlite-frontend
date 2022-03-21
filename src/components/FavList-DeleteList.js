// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { removeListAction } from "../store/actions/listAction";

const DeleteList = ({ setIsDeletingList, list }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const locationPathnamesLength = location.pathname.length;
  const locationPathnamesLengthThatNotContainsList = 2;
  // const startPositionOfListIdInLocationPathname = 7; // for example: location.pathname = /lists/1d9fa494-8a3f-4951-a99b-e3d27576aae9
  // const listId = location.pathname.slice(
  //   startPositionOfListIdInLocationPathname
  // );
  // const allCurrentLists = useSelector((state) => state.entities.stockLists);

  const deleteListHandler = () => {
    dispatch(removeListAction(list.id));
    setIsDeletingList(false);
    if (locationPathnamesLength > locationPathnamesLengthThatNotContainsList) {
      navigate("/");
    }
    // if (allCurrentLists.indexOf(list) < 0) {
    //   navigate("/");
    // }
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
