import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import css from "./DetailsPage.module.css";
import { useParams } from "react-router-dom";
import { getCamperDetails } from "../../redux/operations";
import CamperCard from "../../components/CamperCard/CamperCard";

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
          <h3>Features</h3>
          <ul>
            {camper.transmission && (
              <li>Transmission: {camper.transmission}</li>
            )}
            {camper.engine && <li>Engine: {camper.engine}</li>}
            {camper.AC && <li>AC: Yes</li>}
            {camper.bathroom && <li>Bathroom: Yes</li>}
            {camper.kitchen && <li>Kitchen: Yes</li>}
            {camper.TV && <li>TV: Yes</li>}
            {camper.radio && <li>Radio: Yes</li>}
            {camper.refrigerator && <li>Refrigerator: Yes</li>}
            {camper.microwave && <li>Microwave: Yes</li>}
            {camper.gas && <li>Gas: Yes</li>}
            {camper.water && <li>Water: Yes</li>}
          </ul>
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
