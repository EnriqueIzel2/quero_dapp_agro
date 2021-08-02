import React, { useContext, useEffect, useState } from 'react';
import { Card, Button, CardContent, Typography } from '@material-ui/core';
import { DataContext } from '../../contexts/loadData';
import { CardContainer } from './styles';
import Header from '../../components/Header';

// import { Container } from './styles';

function Entregas() {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  const { contract, accounts } = useContext(DataContext);

  useEffect(() => {
    async function loadProducts() {
      try {
        const newProducts = await contract.methods.getProducts().call();
        setProducts(newProducts);
        console.log(newProducts);
      } catch (error) {
        console.log('O erro de produtos', error);
      }
    }

    async function loadOrders() {
      try {
        const newOrders = await contract.methods.getOrders().call();
        setOrders(newOrders);
        console.log(newOrders);
      } catch (error) {
        console.log('O erro de ordens', error);
      }
    }

    loadProducts();
    loadOrders();
  }, []);

  console.log('contract', contract);

  async function delivery(id) {
    await contract.methods.delivery(id).send({ from: accounts[0] });
  }

  function handleDelivery(_id) {
    console.log('ordfe', orders[0]);
    delivery(_id);
  }

  return (
    <div>
      <Header title="Entregas" />

      <CardContainer>
        {orders.map((order, index) => {
          const product = products[order.id];
          if (!order.delivered && accounts[0] === product.farmer) {
            return (
              <Card>
                <CardContent>
                  <Typography>{product.name}</Typography>
                  <Typography>{product.price}</Typography>

                  <Button onClick={() => handleDelivery(index)}>
                    Entregar
                  </Button>
                </CardContent>
              </Card>
            );
          }
          return false;
        })}
      </CardContainer>
    </div>
  );
}

export default Entregas;
