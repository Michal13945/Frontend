import React, { useContext } from 'react';
import AppContext from '../data/AppContext';
import RatingBar from './RatingBar.js';
import { useNavigate } from 'react-router-dom';

const CarProfile = ({ id, brand, year, regNumber, rating }) => {
  const context = useContext(AppContext);
  const dispatch = context.dispatch;
  const navigate = useNavigate()

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

  const handleEditClick = (id) => {
    navigate(`/lab4/edit/${id}`)
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
        <button onClick={() => handleEditClick(id)} className="btn btn-primary">Edit</button>
        <button onClick={handleDeleteClick} className="btn btn-danger">Delete</button>
        <button onClick={handleRateClick} className="btn btn-success">Rate</button>
      </div>
    </div>
  );
};

export default CarProfile;
