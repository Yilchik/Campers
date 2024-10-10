import css from "./Logo.module.css";

const Logo = () => {
  return (
    <div>
      <h1 className={css.logo}>
        Travel<span className={css.logoSpan}>Trucks</span>
      </h1>
    </div>
  );
};

export default Logo;
