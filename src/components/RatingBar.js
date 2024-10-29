import React from 'react';

const RatingBar = ({ rate = 0 }) => {
    const stars = Array(10)
      .fill('☆')
      .map((star, index) => (index < rate ? '★' : '☆'));
  
    return (
      <div className="rating-bar">
        {stars.map((star, index) => (
          <span key={index} className="star">
            {star}
          </span>
        ))}
      </div>
    );
  };
  
  export default RatingBar;
