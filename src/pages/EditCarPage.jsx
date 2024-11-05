import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import AppContext from '../data/AppContext';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function EditCarPage() {
    const { items, dispatch } = useContext(AppContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const car = items.find(car => car.id === Number(id));
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: car || {}
      });
  
    const onSubmit = (data) => {
      dispatch({
        type: 'edit',
        payload: {
          id: Number(id),
          brand: data.brand,
          year: data.year,
          registrationNumber: data.registrationNumber,
          rating: data.rating
        }
      });
      navigate('/lab1');
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register('id')} />
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
      <button type="submit">Edit Car</button>
    </form>
  );
}

export default EditCarPage;
