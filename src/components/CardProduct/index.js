import React from 'react';
import { Card, Button, CardContent, Typography } from '@material-ui/core';

// eslint-disable-next-line react/prop-types
function CardProduct({ name, price, id, typeItem, payment }) {
  return (
    <Card>
      <CardContent>
        <Typography>{name}</Typography>
        <Typography>{price}</Typography>
        <Typography>{typeItem}</Typography>

        <Button onClick={() => payment(id, price)}>Comprar</Button>
      </CardContent>
    </Card>
  );
}

export default CardProduct;
