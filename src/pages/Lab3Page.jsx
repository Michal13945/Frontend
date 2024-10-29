// src/pages/Lab3Page.jsx
import React from 'react';
import FlexContainer from '../components/FlexContainer';
import Item from '../components/Item';

const data = [
  { name: "Ala", id: 1 },
  { name: "Ela", id: 2 },
  { name: "Karol", id: 3 },
  { name: "Ola", id: 4 },
  { name: "Monika", id: 5 },
  { name: "Robert", id: 6 }
];

const Lab3Page = () => {
  return (
    <div>
      <h1>Laboratorium 3</h1>
      <FlexContainer element={Item} data={data} />
    </div>
  );
};

export default Lab3Page;
