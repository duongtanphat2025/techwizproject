import React, { useState } from 'react';
import '../css/StarRating.css';

const StarRating = ({ totalStars = 5, initialRating = 0, onChange }) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (star) => {
    setRating(star);
    if (onChange) onChange(star);
  };

  const handleMouseEnter = (star) => {
    setHoverRating(star);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className="star-rating" onMouseLeave={handleMouseLeave}>
      {[...Array(totalStars)].map((_, index) => {
        const star = index + 1;
        return (
          <span
            key={star}
            className={`star ${star <= (hoverRating || rating) ? 'filled' : ''}`}
            onClick={() => handleClick(star)}
            onMouseEnter={() => handleMouseEnter(star)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
