import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { HiOutlineMap } from "react-icons/hi";
import css from "./CamperCard.module.css";
import { useParams } from "react-router-dom";
import { getCamperDetails } from "../../redux/operations";
import Loader from "../Loader/Loader";

const CamperCard = () => {
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
      <div>
        <h3>{camper.name || "No name available"}</h3>
        <div className={css.rating}>
          <div className={css.reviews}>
            <FaStar className={css.star} />
            <p>{camper.rating}</p>
            <p>({camper.reviews?.length || 0} Reviews)</p>
          </div>
          <div className={css.infos}>
            <HiOutlineMap className={css.icon} />
            <p>{camper.location}</p>
          </div>
        </div>
        <p className={css.price}>€{camper.price}</p>
      </div>
      <div className={css.gallery}>
        {camper.gallery?.length > 0 ? (
          camper.gallery.map((photo, index) => (
            <img
              key={index}
              src={photo.thumb}
              alt={`Camper ${index}`}
              className={css.photo}
            />
          ))
        ) : (
          <p>No photos available</p>
        )}
      </div>
      <p>{camper.description}</p>
    </div>
  );
};

export default CamperCard;
