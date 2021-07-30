import React from 'react';

import { Container } from './styles';

// eslint-disable-next-line react/prop-types
function Header({ title }) {
  return <Container>{title}</Container>;
}

export default Header;
