import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import css from "./CampersList.module.css";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";

import { BsSuitHeart } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { HiOutlineMap } from "react-icons/hi";
import Badges from "../Badges/Badges";

const CampersList = ({ campers, favorites, toggleFavorite }) => {
  const [loading, setLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    if (campers) {
      setLoading(false);
    }
  }, [campers]);

  if (loading) {
    return <Loader />;
  }

  if (!Array.isArray(campers) || campers.length === 0) {
    return <div>No campers found.</div>;
  }

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <div>
      <ul className={css.list}>
        {campers.slice(0, visibleCount).map((camper) => (
          <li key={camper.id} className={css.card}>
            <div>
              <img
                src={camper.gallery[0]?.thumb}
                alt={camper.name}
                className={css.photo}
              />
            </div>
            <div className={css.info}>
              <div>
                <div className={css.title}>
                  <h3>{camper.name}</h3>
                  <div className={css.price}>
                    <h3>Price: €{camper.price.toFixed(2)}</h3>
                    <div
                      className={css.favoriteIcon}
                      onClick={() => toggleFavorite(camper.id)}
                    >
                      <BsSuitHeart
                        className={
                          favorites.includes(camper.id)
                            ? `${css.iconFilled}`
                            : `${css.iconOutline}`
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className={css.rating}>
                  <div className={css.infos}>
                    <FaStar className={css.star} />
                    <p>{camper.rating}</p>
                    <p>({camper.reviews.length} Reviews)</p>
                  </div>
                  <div className={css.infos}>
                    <HiOutlineMap className={css.icon} />
                    <p>{camper.location}</p>
                  </div>
                </div>
              </div>
              <p className={css.description}>{camper.description}</p>
              <Badges camper={camper} />
              <Link to={`/catalog/${camper.id}`}>
                <button className={css.showMoreBtn}>Show more</button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
      {visibleCount < campers.length && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </div>
  );
};

CampersList.propTypes = {
  campers: PropTypes.array.isRequired,
  favorites: PropTypes.array.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};

export default CampersList;
