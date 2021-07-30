import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

import { contractAdress, contractABI } from '../../services/config';

function Home() {
  const [accounts, setAccounts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadBlockchainData = async () => {
      const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');

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
            </div>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default Home;
