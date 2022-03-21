import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import FavListPanelsList from "./FavListPanelsList";
import { useDispatch } from "react-redux";
import { isAddingList } from "../store/actions/isAddingListAction";
import FormCreateList from "./FormCreateList";

const FavListPanel = () => {
  const dispatch = useDispatch();
  const stockLists = useSelector((state) => state.entities.stockLists);
  const { PopUpAddingList } = useSelector((state) => state.utilities);

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
        {stockLists.map((list) => (
          <FavListPanelsList key={list.id} list={list} />
        ))}
      </div>
    </div>
  );
};

export default FavListPanel;
