import css from "./Reviews.module.css";
import { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { getCamperDetails } from "../../redux/operations";
import Loader from "../Loader/Loader";

const Reviews = () => {
  const [camper, setCamper] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getCamperDetails(id).then(setCamper);
    }
  }, [id]);
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className={css.star} />);
      } else if (i - rating < 1 && i - rating > 0) {
        stars.push(<FaStarHalfAlt key={i} className={css.star} />);
      } else {
        stars.push(<FaRegStar key={i} className={css.star} />);
      }
    }
    return stars;
  };

  if (!camper || !camper.reviews) {
    return <Loader />;
  }

  return (
    <div className={css.container}>
      {camper.reviews.map((review, index) => (
        <div key={index} className={css.reviewCard}>
          <div className={css.reviewerInfo}>
            <div className={css.avatar}>
              <span>{review.reviewer_name.charAt(0)}</span>
            </div>
            <div>
              <h4>{review.reviewer_name}</h4>
              <div className={css.stars}>
                {renderStars(review.reviewer_rating)}
              </div>
            </div>
          </div>
          <p className={css.comment}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
