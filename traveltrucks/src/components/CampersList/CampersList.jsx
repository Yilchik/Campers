// import { useDispatch } from "react-redux";
// import { toggleFavorite } from "../../redux/slice";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import css from "./CampersList.module.css";

import {
  BsCupHot,
  BsDiagram3,
  BsDroplet,
  BsSuitHeart,
  BsUiRadios,
} from "react-icons/bs";
import { FaGasPump } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { HiOutlineMap } from "react-icons/hi";
import { FiWind } from "react-icons/fi";
import { HiOutlineTv } from "react-icons/hi2";

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
                    <BsSuitHeart />
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
              <div className={css.badges}>
                {camper.transmission && (
                  <div className={css.badge}>
                    <BsDiagram3 className={css.icon} />
                    <p className={css.textBtn}>{camper.transmission}</p>
                  </div>
                )}
                {camper.AC && (
                  <div className={css.badge}>
                    <FiWind className={css.icon} />
                    <p className={css.textBtn}>AC</p>
                  </div>
                )}
                {camper.kitchen && (
                  <div className={css.badge}>
                    <BsCupHot className={css.iconBadge} />
                    <p className={css.textBtn}>Kitchen</p>
                  </div>
                )}
                {camper.bathroom && (
                  <div className={css.badge}>
                    <BsDroplet className={css.iconBadge} />
                    <p className={css.textBtn}>Bathroom</p>
                  </div>
                )}
                {camper.TV && (
                  <div className={css.badge}>
                    <HiOutlineTv className={css.iconBadge} />
                    <p className={css.textBtn}>TV</p>
                  </div>
                )}
                {camper.radio && (
                  <div className={css.badge}>
                    <BsUiRadios className={css.iconBadge} />
                    <p className={css.textBtn}>Radio</p>
                  </div>
                )}
                {/* {camper.refrigerator && (
                  <div className={css.badge}>
                    <FiFridg className={css.iconBadge} />
                    <p className={css.textBtn}>Refrigerator</p>
                  </div>
                )} */}
                {/* {camper.microwave && (
                  <div className={css.badge}>
                    <FiMicrowave className={css.iconBadge} />
                    <p className={css.textBtn}>Microwave</p>
                  </div>
                )} */}
                {camper.engine && (
                  <div className={css.badge}>
                    <FaGasPump className={css.iconBadge} />
                    <p className={css.textBtn}>{camper.engine}</p>
                  </div>
                )}
                {/* {camper.water && (
                  <div className={css.badge}>
                    <FiDroplet className={css.iconBadge} />
                    <p className={css.textBtn}>Water</p>
                  </div>
                )} */}
              </div>

              <Link to={`/catalog/${camper.id}`}>
                <button>Show more</button>
              </Link>
            </div>
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
