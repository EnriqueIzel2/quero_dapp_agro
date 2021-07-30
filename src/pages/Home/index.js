import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

function Home() {
  return (
    <Container>
      <Header title="Quero Agricultura" />

      <Link to="/cadastro">Cadastrar Produto</Link>
      <Link to="/produtos">Produtos</Link>
    </Container>
  );
}

export default Home;
