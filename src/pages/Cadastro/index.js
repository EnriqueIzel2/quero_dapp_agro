import React, { useState, useEffect } from 'react';

import Web3 from 'web3';

import { contractAdress, contractABI } from '../../services/config';

// import { Container } from './styles';

function Cadastro() {
  const [acc, setAcc] = useState('');
  const [contrato, setContrato] = useState('');
  const [product, setProduct] = useState({
    name: '',
    price: '',
    typeItem: '',
    description: '',
  });

  useEffect(() => {
    const loadBlockchainData = async () => {
      const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');
      const newAccounts = await web3.eth.requestAccounts();
      setAcc(newAccounts);

      const contract = new web3.eth.Contract(contractABI, contractAdress);

      setContrato(contract);
    };

    loadBlockchainData();
  }, [product]);

  async function handleSubmit(event) {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(acc[0]);

    await contrato.methods
      .setProduct(
        product.name,
        product.price,
        product.typeItem,
        product.description
      )
      .send({ from: acc[0] })
      .then(() => {
        // eslint-disable-next-line no-console
        console.log('success');
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }

  return (
    <div>
      <h1>Cadastro de Produto</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do produto"
          onChange={input =>
            setProduct({ ...product, name: input.target.value })
          }
        />

        <input
          type="text"
          placeholder="Preço"
          onChange={input =>
            setProduct({ ...product, price: input.target.value })
          }
        />

        <input
          type="text"
          placeholder="Tipo"
          onChange={input =>
            setProduct({ ...product, typeItem: input.target.value })
          }
        />

        <input
          type="text"
          placeholder="Descrição"
          onChange={input =>
            setProduct({ ...product, description: input.target.value })
          }
        />

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default Cadastro;
