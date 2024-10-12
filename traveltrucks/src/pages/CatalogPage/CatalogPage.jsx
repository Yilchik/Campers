import Header from "../../components/Header/Header";
import CampersList from "../../components/CampersList/CampersList";
import css from "./CatalogPage.module.css";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../redux/slice";
import { fetchCampers } from "../../redux/operations";

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
  const dispatch = useDispatch();
  const {
    items: campers = [],
    favorites,
    filters,
    status,
    error,
  } = useSelector((state) => state.campers || {});

  const [localFilters, setLocalFilters] = useState(filters);

  useEffect(() => {
    console.log("Filters before fetching campers:", filters);
    dispatch(fetchCampers(filters));
  }, [filters, dispatch]);

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLocalFilters((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleApplyFilters = () => {
    dispatch(setFilters(localFilters));
  };

  useEffect(() => {
    document.querySelectorAll(`.${css.filtersBtn}`).forEach((li) => {
      const input = li.querySelector(`.${css.checkboxInput}`);
      if (input) {
        if (input.checked) {
          li.style.borderColor = "#e44848";
        } else {
          li.style.borderColor = "#dadde1";
        }
      }
    });
  }, [localFilters]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Error: {error}</div>;
  if (status === "succeeded" && campers.length === 0) {
    return <div>No campers available</div>;
  }

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
                value={localFilters.location}
                onChange={handleFilterChange}
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
                  <label className={css.checkboxLabel}>
                    <input
                      type="checkbox"
                      name="as"
                      checked={localFilters.as}
                      onChange={handleFilterChange}
                      className={css.checkboxInput}
                    />
                    <FiWind className={css.icon} />
                    <p className={css.textBtn}>AC</p>
                  </label>
                </li>
                <li className={css.filtersBtn}>
                  <label className={css.checkboxLabel}>
                    <input
                      type="checkbox"
                      name="automatic"
                      checked={localFilters.automatic}
                      onChange={handleFilterChange}
                      className={css.checkboxInput}
                    />
                    <BsDiagram3 className={css.icon} />
                    <p className={css.textBtn}>Automatic</p>
                  </label>
                </li>
                <li className={css.filtersBtn}>
                  <label className={css.checkboxLabel}>
                    <input
                      type="checkbox"
                      name="kitchen"
                      checked={localFilters.kitchen}
                      onChange={handleFilterChange}
                      className={css.checkboxInput}
                    />
                    <BsCupHot className={css.icon} />
                    <p className={css.textBtn}>Kitchen</p>
                  </label>
                </li>
                <li className={css.filtersBtn}>
                  <label className={css.checkboxLabel}>
                    <input
                      type="checkbox"
                      name="tv"
                      checked={localFilters.tv}
                      onChange={handleFilterChange}
                      className={css.checkboxInput}
                    />
                    <HiOutlineTv className={css.icon} />
                    <p className={css.textBtn}>TV</p>
                  </label>
                </li>
                <li className={css.filtersBtn}>
                  <label className={css.checkboxLabel}>
                    <input
                      type="checkbox"
                      name="bathroom"
                      checked={localFilters.bathroom}
                      onChange={handleFilterChange}
                      className={css.checkboxInput}
                    />
                    <BsDroplet className={css.icon} />
                    <p className={css.textBtn}>Bathroom</p>
                  </label>
                </li>
              </ul>
            </div>
            <div className={css.equipment}>
              <h3>Vehicle type</h3>
              <hr className={css.line} />
              <ul className={css.filters}>
                <li className={css.filtersBtn}>
                  <label className={css.checkboxLabel}>
                    <input
                      type="radio"
                      name="vehicleType"
                      value="van"
                      checked={localFilters.vehicleType === "van"}
                      onChange={handleFilterChange}
                      className={css.checkboxInput}
                    />
                    <BsGrid1X2 className={css.icon} />
                    <p className={css.textBtn}>Van</p>
                  </label>
                </li>
                <li className={css.filtersBtn}>
                  <label className={css.checkboxLabel}>
                    <input
                      type="radio"
                      name="vehicleType"
                      value="fullyIntegrated"
                      checked={localFilters.vehicleType === "fullyIntegrated"}
                      onChange={handleFilterChange}
                      className={css.checkboxInput}
                    />
                    <IoGridOutline className={css.icon} />
                    <p className={css.textBtn}>Fully Integrated</p>
                  </label>
                </li>
                <li className={css.filtersBtn}>
                  <label className={css.checkboxLabel}>
                    <input
                      type="radio"
                      name="vehicleType"
                      value="alcove"
                      checked={localFilters.vehicleType === "alcove"}
                      onChange={handleFilterChange}
                      className={css.checkboxInput}
                    />
                    <BsGrid3X3Gap className={css.icon} />
                    <p className={css.textBtn}>Alcove</p>
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <button onClick={handleApplyFilters} className={css.btn}>
            Search
          </button>
          <CampersList campers={campers} favorites={favorites} />
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
