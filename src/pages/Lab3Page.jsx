import React, { useContext } from 'react';
import AppContext from '../data/AppContext';
import FlexContainer from '../components/FlexContainer';
import Item from '../components/Item';

const Lab3Page = () => {
  const { people } = useContext(AppContext);

  return (
    <div>
      <h1>Laboratorium 3</h1>
      <FlexContainer element={Item} data={people}/>
    </div>
  );
};

export default Lab3Page;
