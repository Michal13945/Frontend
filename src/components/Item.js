import React from 'react';
import { Card } from 'react-bootstrap';

const Item = ({ name, id }) => (
  <Card style={{ width: '18rem' }} className="border mb-3 p-3 ms-3">
    <Card.Body>
      <Card.Title>{name}</Card.Title>
    </Card.Body>
  </Card>
);

export default Item;
