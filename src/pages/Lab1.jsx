import React from 'react';
import CarProfile from '../components/CarProfile';
import { data } from '../data/module-data';

function Lab1() {
  return (
    <div>
      {data.map(car => (
        <CarProfile 
          key={car.id} 
          id={car.id} 
          brand={car.brand} 
          year={car.year} 
          regNumber={car.regNumber} 
        />
      ))}
    </div>
  );
}

export default Lab1;
