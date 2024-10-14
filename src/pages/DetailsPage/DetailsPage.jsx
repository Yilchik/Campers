import Header from "../../components/Header/Header";
import { useEffect, useRef, useState } from "react";
import css from "./DetailsPage.module.css";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { getCamperDetails } from "../../redux/operations";
import CamperCard from "../../components/CamperCard/CamperCard";
import clsx from "clsx";
import BookingForm from "../../components/BookingForm/BookingForm";
import Loader from "../../components/Loader/Loader";

const DetailsPage = () => {
  const [camper, setCamper] = useState(null);
  const { id } = useParams();
  const backLinkHref = useRef(location.state || "/");

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  useEffect(() => {
    if (id) {
      getCamperDetails(id).then(setCamper);
    }
  }, [id]);

  if (!camper) {
    return <Loader />;
  }

  return (
    <div>
      <Header />
      <div className={css.container}>
        <CamperCard />
        <div className={css.info}>
          <div>
            <div className={css.additionalInfo}>
              <NavLink
                to="features"
                className={buildLinkClass}
                state={backLinkHref.current}
              >
                Features
              </NavLink>
              <NavLink
                to="reviews"
                className={buildLinkClass}
                state={backLinkHref.current}
              >
                Reviews
              </NavLink>
            </div>
            <Outlet />
          </div>
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
