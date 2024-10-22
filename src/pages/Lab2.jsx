import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../data/module-data';

function Lab2() {
  const { id } = useParams();
  const car = data.find(p => p.id === Number(id));

  if (!id) {
    return <p>Brak identyfikatora samochodu.</p>;
  }

  if (!car) {
    return <p>Nie znaleziono samochodu o id: {id}</p>;
  }

  return (
    <div>
      <h1>Dane samochodu</h1>
      <p>ID: {car.id}</p>
      <p>Marka: {car.brand}</p>
      <p>Rok produkcji: {car.year}</p>
      <p>Numer rejestracyjny: {car.registrationNumber}</p>
    </div>
  );
}

export default Lab2;
