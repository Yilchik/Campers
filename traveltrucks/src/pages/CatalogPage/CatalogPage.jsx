import Header from "../../components/Header/Header";
import css from "./CatalogPage.module.css";

import { HiOutlineMap } from "react-icons/hi";
import { FiWind } from "react-icons/fi";
import { BsDiagram3 } from "react-icons/bs";
import { BsCupHot } from "react-icons/bs";
import { HiOutlineTv } from "react-icons/hi2";
import { BsDroplet } from "react-icons/bs";
import { BsGrid1X2 } from "react-icons/bs";
import { IoGridOutline } from "react-icons/io5";
import { BsGrid3X3Gap } from "react-icons/bs";

const CatalogPage = () => {
  return (
    <div>
      <Header />
      <div className={css.container}>
        <div className={css.form}>
          <div className={css.location}>
            <label htmlFor="location" className={css.label}>
              Location
            </label>
            <div className={css.inputWrapper}>
              <HiOutlineMap className={css.iconLocation} />
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Kyiv, Ukraine"
                className={css.input}
              />
            </div>
          </div>
          <div className={css.filtersBlock}>
            <p className={css.text}>Filters</p>
            <div className={css.equipment}>
              <h3>Vehicle equipment</h3>
              <hr className={css.line} />
              <ul className={css.filters}>
                <li className={css.filtersBtn}>
                  <FiWind className={css.icon} />
                  <p className={css.textBtn}>AC</p>
                </li>
                <li className={css.filtersBtn}>
                  <BsDiagram3 className={css.icon} />
                  <p className={css.textBtn}>Automatic</p>
                </li>
                <li className={css.filtersBtn}>
                  <BsCupHot className={css.icon} />
                  <p className={css.textBtn}>Kitchen</p>
                </li>
                <li className={css.filtersBtn}>
                  <HiOutlineTv className={css.icon} />
                  <p className={css.textBtn}>TV</p>
                </li>
                <li className={css.filtersBtn}>
                  <BsDroplet className={css.icon} />
                  <p className={css.textBtn}>Bathroom</p>
                </li>
              </ul>
            </div>
            <div className={css.equipment}>
              <h3>Vehicle type</h3>
              <hr className={css.line} />
              <ul className={css.filters}>
                <li className={css.filtersBtn}>
                  <BsGrid1X2 className={css.icon} />
                  <p className={css.textBtn}>Van</p>
                </li>
                <li className={css.filtersBtn}>
                  <IoGridOutline className={css.icon} />
                  <p className={css.textBtn}>Fully Integrated</p>
                </li>
                <li className={css.filtersBtn}>
                  <BsGrid3X3Gap className={css.icon} />
                  <p className={css.textBtn}>Alcove</p>
                </li>
              </ul>
            </div>
          </div>
          <button className={css.btn}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
