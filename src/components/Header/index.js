import React from 'react';

import { Container, Text } from './styles';

// eslint-disable-next-line react/prop-types
function Header({ title }) {
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  );
}

export default Header;
