import React, { useState } from 'react';
import RatingBar from './RatingBar.js';

const CarProfile = ({ id, brand, year, regNumber, rating, dispatch }) => {
  const handleRateClick = () => {
    const newRating = rating === 10 ? 0 : rating + 1;
    dispatch({
      type: 'rate',
      payload: { id, newRating }
    });
  };

  const handleDeleteClick = () => {
    dispatch({
      type: 'delete',
      payload: { id }
    });
  };

  const handleEditClick = () => {
    dispatch({
      type: 'edit',
      payload: { id }
    });
  };
  return (
    <div className="card">
      <h3>Car ID: {id}</h3>
      <p>Brand: {brand}</p>
      <p>Year: {year}</p>
      <p>Registration Number: {regNumber}</p>
      <p>Rating: {rating}</p>
      <RatingBar rate={rating} />
      <div className="button-group">
        <button onClick={handleEditClick} className="btn btn-primary">Edit</button>
        <button onClick={handleDeleteClick} className="btn btn-danger">Delete</button>
        <button onClick={handleRateClick} className="btn btn-success">Rate</button>
      </div>
    </div>
  );
};

export default CarProfile;
