import React, { useContext, useState, useEffect } from 'react';

import { Container, CardContainer } from './styles';
import CardProduct from '../../components/CardProduct';
import Header from '../../components/Header';
import { DataContext } from '../../contexts/loadData';

function Produtos() {
  const [products, setProducts] = useState([]);

  const { accounts, contract } = useContext(DataContext);

  useEffect(() => {
    async function loadProducts() {
      try {
        const newProducts = await contract.methods.getProducts().call();
        setProducts(newProducts);
      } catch (error) {
        console.log('O erro de produtos', error);
      }
    }

    loadProducts();
  }, []);

  async function payment(productId, _value) {
    try {
      await contract.methods
        .payProduct(productId)
        .send({ from: accounts[0], value: _value });
    } catch (error) {
      console.log('Erro no pagamento', error);
    }
  }

  function handlePayment(_productId, _value) {
    const valueWei = _value;
    //   .toBN(web3.utils.toWei(_value, 'ether'))
    //   .toString();

    payment(_productId, valueWei);
  }

  return (
    <Container>
      <Header title="Produtos" />

      <CardContainer>
        {products.map((product, index) => (
          <CardProduct
            name={product.name}
            price={product.price}
            id={index}
            typeItem={product.typeItem}
            status={product.status}
            payment={handlePayment}
          />
        ))}
      </CardContainer>
    </Container>
  );
}

export default Produtos;
