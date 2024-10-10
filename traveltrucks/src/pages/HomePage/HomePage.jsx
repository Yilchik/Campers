import Header from "../../components/Header/Header";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className={css.container}>
        <h1>Campers of your dreams</h1>
        <p>You can find everything you want in our catalog</p>
      </div>
    </div>
  );
};

export default HomePage;
