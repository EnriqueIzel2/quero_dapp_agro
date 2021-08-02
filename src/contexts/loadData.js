import React, { useState, createContext, useEffect } from 'react';
import Web3 from 'web3';

import { contractABI, contractAdress } from '../services/config';

export const DataContext = createContext({});

// eslint-disable-next-line react/prop-types
function DataProvider({ children }) {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [contract, setContract] = useState('');
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadBlockchainData = async () => {
      console.log('To no contexto');
      const web = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');
      setWeb3(web);

      try {
        const newAccounts = await web.eth.requestAccounts();
        setAccounts(newAccounts);

        const newContract = new web.eth.Contract(contractABI, contractAdress);
        console.log('o contract do context', newContract);
        setContract(newContract);
      } catch (error) {
        console.log('requisicao do context', error);
      }

      // const newProducts = await newContract.methods.getProducts().call();
      // setProducts(newProducts);
    };

    loadBlockchainData();
  }, []);

  return (
    <DataContext.Provider value={{ web3, accounts, contract }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
