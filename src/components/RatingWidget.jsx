// src/components/RatingWidget.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./RatingWidget.css";

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleRatingSubmit = () => {
    if (rating >= 1 && rating <= 5) {
      onRatingSubmit(productId, rating);
      setRating(0);
    } else {
      alert("Please select a rating between 1 and 5.");
    }
  };

  return (
    <div className="rating-widget">
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
            onClick={() => setRating(star)}
            style={{
              color: star <= (hoveredRating || rating) ? "gold" : "gray",
              fontSize: "24px",
              cursor: "pointer",
            }}
          >
            ★
          </span>
        ))}
      </div>
      <button onClick={handleRatingSubmit} className="submit-btn">
        Submit Rating
      </button>
    </div>
  );
};

RatingWidget.propTypes = {
  productId: PropTypes.number.isRequired,
  onRatingSubmit: PropTypes.func.isRequired,
};

export default RatingWidget;
