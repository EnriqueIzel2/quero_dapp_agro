import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

import { contractAdress, contractABI } from '../../services/config';

function Home() {
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

  function handlePayment(event) {
    event.preventDefault();
    const number = 50;

    const value = number * 1000000000000000000;

    payment('0xEdE56Ac99a7A77fcaD87f6B354623578524368c1', value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quero agricultura</h1>
        <h2>Sua conta: {accounts[0]}</h2>
        <ul>
          {products.map(product => (
            <div key={product.farmer}>
              <li>{product.name}</li>
              <li>{product.owner}</li>
              <li>{product.price}</li>
            </div>
          ))}
        </ul>
      </header>

      <button type="button" onClick={handlePayment}>
        Pagar
      </button>
    </div>
  );
}

export default Home;
