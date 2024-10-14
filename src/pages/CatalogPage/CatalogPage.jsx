import Header from "../../components/Header/Header";
import CampersList from "../../components/CampersList/CampersList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import css from "./CatalogPage.module.css";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../redux/slice";
import { fetchCampers } from "../../redux/operations";

import { HiOutlineMap } from "react-icons/hi";
import { FiWind } from "react-icons/fi";
import {
  BsDiagram3,
  BsCupHot,
  BsDroplet,
  BsGrid1X2,
  BsGrid3X3Gap,
} from "react-icons/bs";
import { HiOutlineTv } from "react-icons/hi2";
import { IoGridOutline } from "react-icons/io5";

const CatalogPage = () => {
  const dispatch = useDispatch();

  const {
    items: campers = [],
    favorites: favoriteCampers = [],
    filters,
    status,
  } = useSelector((state) => state.campers || {});

  const [localFilters, setLocalFilters] = useState({
    location: "",
    form: "",
    ac: false,
    transmission: "",
    kitchen: false,
    tv: false,
    bathroom: false,
  });

  useEffect(() => {
    dispatch(fetchCampers(filters));
  }, [filters, dispatch]);

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "transmission") {
      setLocalFilters((prev) => ({
        ...prev,
        transmission: checked ? "automatic" : "",
      }));
    } else {
      setLocalFilters((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleApplyFilters = () => {
    dispatch(setFilters({}));

    const cleanedFilters = Object.keys(localFilters)
      .filter((key) => {
        if (key === "transmission") {
          return localFilters.transmission === "automatic";
        }
        return localFilters[key] !== "" && localFilters[key] !== false;
      })
      .reduce((obj, key) => {
        obj[key] = localFilters[key] === true ? 1 : localFilters[key];
        return obj;
      }, {});
    dispatch(setFilters(cleanedFilters));
    dispatch(fetchCampers(cleanedFilters));
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

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  useEffect(() => {
    dispatch(fetchCampers(filters));
  }, [filters, dispatch]);

  if (status === "loading") return <Loader />;
  if (status === "failed")
    return (
      <ErrorMessage message="Whoops, something went wrong! Please try reloading this page!" />
    );
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
                      name="ac"
                      checked={localFilters.ac}
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
                      name="transmission"
                      checked={localFilters.transmission === "automatic"}
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
                      name="form"
                      value="panelTruck"
                      checked={localFilters.form === "panelTruck"}
                      onChange={handleFilterChange}
                      className={css.checkboxInput}
                    />
                    <BsGrid1X2 className={css.icon} />
                    <p className={css.textBtn}>Panel Truck</p>
                  </label>
                </li>
                <li className={css.filtersBtn}>
                  <label className={css.checkboxLabel}>
                    <input
                      type="radio"
                      name="form"
                      value="fullyIntegrated"
                      checked={localFilters.form === "fullyIntegrated"}
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
                      name="form"
                      value="alcove"
                      checked={localFilters.form === "alcove"}
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
        </div>
        <CampersList
          campers={campers.items || []}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      </div>
    </div>
  );
};

export default CatalogPage;
