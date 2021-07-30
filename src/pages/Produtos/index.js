import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Web3 from 'web3';

import { contractAdress, contractABI } from '../../services/config';

import { CardContainer } from './styles';

import CardProduct from '../../components/CardProduct';

function Produtos() {
  const [contrato, setContrato] = useState('');
  const [accounts, setAccounts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadBlockchainData = async () => {
      const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');
      setContrato(web3);

      try {
        const newAccounts = await web3.eth.requestAccounts();
        setAccounts(newAccounts);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
      const contract = new web3.eth.Contract(contractABI, contractAdress);

      const newProducts = await contract.methods.getAllProducts().call();
      // eslint-disable-next-line no-console
      console.log(newProducts);
      setProducts(newProducts);
    };

    loadBlockchainData();
  }, []);

  async function payment(_to, _value) {
    const dataTransaction = { from: accounts[0], to: _to, value: _value };

    await contrato.eth.sendTransaction(dataTransaction, (error, hash) => {
      if (error) {
        // eslint-disable-next-line no-console
        console.log(error, hash);
      }
    });
  }

  function handlePayment(_to, _value) {
    const number = parseInt(_value, 10);

    const value = number * 1000000000000000000;

    // eslint-disable-next-line no-console
    console.log(_value);
    payment(_to, value);
  }

  return (
    <Container>
      <h1>Quero agricultura</h1>

      <CardContainer>
        {products.map(product => (
          <CardProduct
            name={product.name}
            price={product.price}
            owner={product.owner}
            typeItem={product.typeItem}
            description={product.description}
            payment={handlePayment}
          />
        ))}
      </CardContainer>
    </Container>
  );
}

export default Produtos;
