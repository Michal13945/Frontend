import React, { useReducer } from 'react';
import CarProfile from '../components/CarProfile';
import { data } from '../data/module-data';
import AppReducer from '../data/AppReducer';

function Lab1Page() {
  const [items, dispatch] = useReducer(AppReducer, data);

  return (
    <div>
      {items.map(car => (
        <CarProfile
          key={car.id}
          id={car.id}
          brand={car.brand}
          year={car.year}
          regNumber={car.regNumber}
          rating={car.rating}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
}

export default Lab1Page;
