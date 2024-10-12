import { useDispatch } from "react-redux";
import { toggleFavorite } from "../../redux/slice";

const CampersList = ({ campers, favorites }) => {
  const dispatch = useDispatch();

  const handleFavoriteToggle = (id) => {
    dispatch(toggleFavorite(id));
  };
  <div>
    {campers && campers.length > 0 ? (
      campers.map((camper) => (
        <div key={camper.id}>
          <h2>{camper.name}</h2>
          <p>Location: {camper.location}</p>
          <p>Type: {camper.form}</p>
          <button onClick={() => handleFavoriteToggle(camper.id)}>
            {favorites.includes(camper.id)
              ? "Remove from Favorites"
              : "Add to Favorites"}
          </button>
        </div>
      ))
    ) : (
      <div>No campers available</div>
    )}
  </div>;
};

export default CampersList;
