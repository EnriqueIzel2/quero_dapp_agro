import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
  Container,
} from '@material-ui/core';

import Header from '../../components/Header';
import { CardsContainer } from './styles';

function Home() {
  return (
    <>
      <Header title="Quero Agricultura" />
      <Container style={{ marginTop: '80px' }}>
        <CardsContainer>
          <Card>
            <CardContent>
              <Typography variant="body1">
                Aqui você pode cadastrar novos produtos
              </Typography>
            </CardContent>
            <CardActions>
              <Button component={Link} to="/cadastro">
                Ir para cadastro
              </Button>
            </CardActions>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="body1">
                Aqui você pode comprar produtos
              </Typography>
            </CardContent>
            <CardActions>
              <Button component={Link} to="/produtos">
                Ir para produtos
              </Button>
            </CardActions>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="body1">
                Aqui você pode consultar suas entregas
              </Typography>
            </CardContent>
            <CardActions>
              <Button component={Link} to="/entregas">
                Ir para entregas
              </Button>
            </CardActions>
          </Card>
        </CardsContainer>
      </Container>
    </>
  );
}

export default Home;
