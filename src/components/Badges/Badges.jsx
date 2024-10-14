import css from "./Badges.module.css";
import PropTypes from "prop-types";

import {
  BsCupHot,
  BsDiagram3,
  BsDroplet,
  BsGrid1X2,
  BsGrid3X3Gap,
  BsUiRadios,
} from "react-icons/bs";
import { TbGasStation } from "react-icons/tb";
import { FiWind } from "react-icons/fi";
import { HiOutlineTv } from "react-icons/hi2";
import { IoGridOutline } from "react-icons/io5";
import { LuMicrowave } from "react-icons/lu";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { PiGasCanThin } from "react-icons/pi";
import { MdOutlineWater } from "react-icons/md";
import Loader from "../../components/Loader/Loader";

const Badges = ({ camper }) => {
  if (!camper) {
    return <Loader />;
  }

  const formIcons = {
    panelTruck: <BsGrid1X2 className={css.iconBadge} />,
    fullyIntegrated: <IoGridOutline className={css.iconBadge} />,
    alcove: <BsGrid3X3Gap className={css.iconBadge} />,
  };

  return (
    <div className={css.badges}>
      {camper.transmission && (
        <div className={css.badge}>
          <BsDiagram3 className={css.iconBadge} />
          <p className={css.textBtn}>{camper.transmission}</p>
        </div>
      )}
      {camper.ac && (
        <div className={css.badge}>
          <FiWind className={css.iconBadge} />
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
  );
};

Badges.propTypes = {
  camper: PropTypes.shape({
    transmission: PropTypes.string,
    ac: PropTypes.bool,
    kitchen: PropTypes.bool,
    bathroom: PropTypes.bool,
    tv: PropTypes.bool,
    radio: PropTypes.bool,
    form: PropTypes.string,
    microwave: PropTypes.bool,
    engine: PropTypes.string,
    refrigerator: PropTypes.bool,
    gas: PropTypes.bool,
    water: PropTypes.bool,
  }).isRequired,
};

export default Badges;
