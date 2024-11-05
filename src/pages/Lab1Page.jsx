import React, { useContext } from 'react';
import AppContext from '../data/AppContext';
import CarProfile from '../components/CarProfile';
import { data } from '../data/module-data';
import AppReducer from '../data/AppReducer';

function Lab1Page() {
  const context = useContext(AppContext);
  const dispatch = context.dispatch;
  const items = context.items;

  return (
    <div>
      {items.map(car => (
        <CarProfile
          key={car.id}
          id={car.id}
          brand={car.brand}
          year={car.year}
          regNumber={car.registrationNumber}
          rating={car.rating}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
}

export default Lab1Page;
