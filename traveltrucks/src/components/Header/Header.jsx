import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import clsx from "clsx";
import logo from "../../assets/logo.svg";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Header = () => (
  <div className={css.header}>
    <nav className={css.nav}>
      <NavLink to="/">
        <img src={logo} alt="Logo" className={css.logo} />
      </NavLink>
      <div className={css.navigation}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={buildLinkClass}>
          Catalog
        </NavLink>
      </div>
    </nav>
  </div>
);

export default Header;
