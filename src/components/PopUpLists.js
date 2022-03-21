import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { hidePopUpAction } from "../store/actions/isPopUpListsAction";
import PopUpAddedList from "./PopUpAddedList";
import FormCreateList from "./FormCreateList";
import {
  isAddingList,
  isNotAddingList,
} from "../store/actions/isAddingListAction";

const PopUpLists = ({ quote, company }) => {
  const { PopUpAddingList } = useSelector((state) => state.utilities);
  const stockLists = useSelector((state) => state.entities.stockLists);

  const dispatch = useDispatch();

  const exitPopUpLists = (e) => {
    const element = e.target;
    if (element.classList.contains("popup-shadow")) {
      dispatch(hidePopUpAction());
      dispatch(isNotAddingList());
    }
    document.body.style.overflow = "auto";
    // document.body.style.paddingRight = "0rem";
  };
  const pressfaWindowClose = () => {
    dispatch(hidePopUpAction());
    dispatch(isNotAddingList());
  };
  return (
    <div className="popuplists-container">
      <div onClick={exitPopUpLists} className="popup-shadow"></div>

      <div
        className="lists-panel"
        onKeyDown={
          (e) => (e.key === 27 ? console.log("asdfasdf") : "") // Press ESC to exit Pop-up
        }
      >
        <div className="popup-container">
          <div className="lists-header">
            <h3>Add {company.ticker} to List</h3>
            <FontAwesomeIcon
              onClick={pressfaWindowClose}
              className="exit-icon"
              icon={faWindowClose}
            />
          </div>
          <hr />
          {!PopUpAddingList ? (
            <div className="createlist-container">
              <div
                onClick={() => dispatch(isAddingList())}
                className="createlist-button"
              >
                <div></div>
                <FontAwesomeIcon
                  className="createlist-icon"
                  icon={faPlusSquare}
                />
                <h3 className="createlist-title">Create New List</h3>
              </div>
            </div>
          ) : (
            <div className="createlistform-popup">
              <FormCreateList />
            </div>
          )}
          <div className="lists-container addtolist-list">
            <ul>
              {stockLists.map((list) => (
                <PopUpAddedList
                  key={list.id}
                  list={list}
                  quote={quote}
                  company={company}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopUpLists;
