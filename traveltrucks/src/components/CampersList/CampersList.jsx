// import { useDispatch } from "react-redux";
// import { toggleFavorite } from "../../redux/slice";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import css from "./CampersList.module.css";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

import {
  BsCupHot,
  BsDiagram3,
  BsDroplet,
  BsGrid1X2,
  BsGrid3X3Gap,
  BsSuitHeart,
  BsUiRadios,
} from "react-icons/bs";
import { TbGasStation } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { HiOutlineMap } from "react-icons/hi";
import { FiWind } from "react-icons/fi";
import { HiOutlineTv } from "react-icons/hi2";
import { IoGridOutline } from "react-icons/io5";
import { LuMicrowave } from "react-icons/lu";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { PiGasCanThin } from "react-icons/pi";
import { MdOutlineWater } from "react-icons/md";

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
  const [visibleCount, setVisibleCount] = useState(4);

  const formIcons = {
    van: <BsGrid1X2 className={css.iconBadge} />,
    fullyIntegrated: <IoGridOutline className={css.iconBadge} />,
    alcove: <BsGrid3X3Gap className={css.iconBadge} />,
  };

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
                {camper.ac && (
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
                {camper.tv && (
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
                {camper.form && (
                  <div className={css.badge}>
                    {formIcons[camper.form]}
                    <p className={css.textBtn}>{camper.form}</p>
                  </div>
                )}
                {camper.microwave && (
                  <div className={css.badge}>
                    <LuMicrowave className={css.iconBadge} />
                    <p className={css.textBtn}>Microwave</p>
                  </div>
                )}
                {camper.engine && (
                  <div className={css.badge}>
                    <TbGasStation className={css.iconBadge} />
                    <p className={css.textBtn}>{camper.engine}</p>
                  </div>
                )}
                {camper.refrigerator && (
                  <div className={css.badge}>
                    <CgSmartHomeRefrigerator className={css.iconBadge} />
                    <p className={css.textBtn}>Refrigerator</p>
                  </div>
                )}
                {camper.gas && (
                  <div className={css.badge}>
                    <PiGasCanThin className={css.iconBadge} />
                    <p className={css.textBtn}>Gas</p>
                  </div>
                )}
                {camper.water && (
                  <div className={css.badge}>
                    <MdOutlineWater className={css.iconBadge} />
                    <p className={css.textBtn}>Water</p>
                  </div>
                )}
              </div>
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
};

export default CampersList;
