import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleViewNowClick = () => {
    navigate("/catalog");
  };

  return (
    <div>
      <Header />
      <div className={css.container}>
        <div className={css.title}>
          <h1>Campers of your dreams</h1>
          <p className={css.text}>
            You can find everything you want in our catalog
          </p>
        </div>
        <button onClick={handleViewNowClick}>View Now</button>
      </div>
    </div>
  );
};

export default HomePage;
