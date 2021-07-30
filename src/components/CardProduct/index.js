import React from 'react';

import { Card, Button } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
function CardProduct({ description, name, price, owner, typeItem, payment }) {
  return (
    <Card style={{ width: '18rem', backgroundColor: 'purple', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{price}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{typeItem}</Card.Text>

        <Button variant="primary" onClick={() => payment(owner, price)}>
          Compar
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardProduct;
