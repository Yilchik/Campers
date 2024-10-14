import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCamperDetails } from "../../redux/operations";
import css from "./Features.module.css";

import Badges from "../Badges/Badges";
import Loader from "../Loader/Loader";

const Features = () => {
  const [camper, setCamper] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getCamperDetails(id).then(setCamper);
    }
  }, [id]);

  if (!camper) {
    return <Loader />;
  }

  return (
    <div className={css.container}>
      <Badges camper={camper} />
      <div className={css.equipment}>
        <h3>Vehicle details</h3>
        <hr className={css.line} />
        <ul className={css.details}>
          <li>
            <div className={css.detail}>
              <p>Form</p>
              <p>{camper.form}</p>
            </div>
          </li>
          <li>
            <div className={css.detail}>
              <p>Length</p>
              <p>{camper.length}</p>
            </div>
          </li>
          <li>
            <div className={css.detail}>
              <p>Width</p>
              <p>{camper.width}</p>
            </div>
          </li>
          <li>
            <div className={css.detail}>
              <p>Height</p>
              <p>{camper.height}</p>
            </div>
          </li>
          <li>
            <div className={css.detail}>
              <p>Tank</p>
              <p>{camper.tank}</p>
            </div>
          </li>
          <li>
            <div className={css.detail}>
              <p>Consumption</p>
              <p>{camper.consumption}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
