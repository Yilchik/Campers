import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCamperDetails } from "../../redux/operations";
import css from "./Features.module.css";

import Badges from "../Badges/Badges";

const Features = () => {
  const [camper, setCamper] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getCamperDetails(id).then(setCamper);
    }
  }, [id]);

  if (!camper) {
    return <div>Loading...</div>;
  }

  return (
    <div className={css.container}>
      <Badges camper={camper} />
    </div>
  );
};

export default Features;
