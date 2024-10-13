// import { useDispatch } from "react-redux";
// import { toggleFavorite } from "../../redux/slice";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import css from "./CampersList.module.css";

const CampersList = ({ campers }) => {
  const location = useLocation();
  // const dispatch = useDispatch();

  // const handleFavoriteToggle = (id) => {
  //   dispatch(toggleFavorite(id));
  // };
  if (!campers) {
    return <div>Loading campers...</div>;
  }

  if (!Array.isArray(campers) || campers.length === 0) {
    return <div>No campers found.</div>;
  }

  return (
    <div>
      <ul className={css.list}>
        {campers.map((camper) => (
          <li key={camper.id}>
            <Link to={`/campers/${camper.id}`} state={location}>
              {camper.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
CampersList.propTypes = {
  campers: PropTypes.array.isRequired,
};

export default CampersList;
