import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import AppContext from '../data/AppContext';
import { useNavigate } from 'react-router-dom';

function AddCarPage() {
    const { dispatch } = useContext(AppContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        setIsSubmitting(true);
        dispatch({
          type: 'add',
          payload: {
            brand: data.brand,
            year: data.year,
            registrationNumber: data.registrationNumber,
            rating: data.rating
          }
        });
        setIsSubmitting(false);
        navigate('/lab1');
      };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Brand</label>
                <input {...register('brand', { required: true, maxLength: 30 })} />
                {errors.brand && <p>Brand is required and must be less than 30 characters.</p>}
            </div>
            <div>
                <label>Year</label>
                <input type="number" {...register('year', { required: true, min: 1980, max: 2024 })} />
                {errors.year && <p>Year is required and must be between 1980 and 2024.</p>}
            </div>
            <div>
                <label>Registration Number</label>
                <input {...register('registrationNumber', { required: true, maxLength: 15 })} />
                {errors.registrationNumber && <p>Registration number is required and must be less than 15 characters.</p>}
            </div>
            <div>
                <label>Rating</label>
                <input type="number" {...register('rating', { required: true, min: 0, max: 10 })} />
                {errors.rating && <p>Rating is required and must be between 0 and 10.</p>}
            </div>
            <button type="submit" disabled={isSubmitting}>Add Car</button>
        </form>
    );
}

export default AddCarPage;
