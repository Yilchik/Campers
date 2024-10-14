import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import css from "./DetailsPage.module.css";
import { useParams } from "react-router-dom";
import { getCamperDetails } from "../../redux/operations";
import CamperCard from "../../components/CamperCard/CamperCard";
import Features from "../../components/Features/Features";

const DetailsPage = () => {
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
    <div>
      <Header />
      <div className={css.container}>
        <div>
          <CamperCard />
          <Features />
        </div>
        <div>
          <h3>Vehicle Details</h3>
          <p>Form: {camper.form}</p>
          <p>Width: {camper.width} m</p>
          <p>Height: {camper.height} m</p>
          <p>Tank: {camper.tank} l</p>
          <p>Consumption: {camper.consumption} l/100km</p>
        </div>
        <div>
          <h3>Reviews</h3>
        </div>
        <div>
          <h3>Book your campervan</h3>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
