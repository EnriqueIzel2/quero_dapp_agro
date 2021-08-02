import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';
import Web3 from 'web3';

import { contractAdress, contractABI } from '../../services/config';

import Background from '../../components/Background';
import { BodyContainer, FormContainer } from './styles';
import Header from '../../components/Header';

function Cadastro() {
  const [acc, setAcc] = useState('');
  const [contrato, setContrato] = useState('');
  const [product, setProduct] = useState({
    name: '',
    price: '',
    typeItem: '',
    plantingLocation: '',
    plantingDate: '',
    plantingMethod: '',
    harvestDate: '',
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

    await contrato.methods
      .setProduct(
        product.name,
        product.price,
        product.typeItem,
        product.plantingLocation,
        product.plantingDate,
        product.plantingMethod,
        product.harvestDate
      )
      .send({ from: acc[0] })
      .then(() => {
        console.log('success');
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <Background>
      <Header title="Cadastro de Produto" />

      <BodyContainer>
        <FormContainer>
          <TextField
            label="Nome do produto"
            onChange={input =>
              setProduct({ ...product, name: input.target.value })
            }
          />

          <TextField
            label="Preço"
            onChange={input =>
              setProduct({
                ...product,
                price: input.target.value,
              })
            }
          />

          <TextField
            label="Tipo"
            onChange={input =>
              setProduct({ ...product, typeItem: input.target.value })
            }
          />

          <TextField
            label="Local de plantio"
            onChange={input =>
              setProduct({ ...product, plantingLocation: input.target.value })
            }
          />

          <TextField
            label="Data do plantio"
            onChange={input =>
              setProduct({ ...product, plantingDate: input.target.value })
            }
          />

          <TextField
            label="Método de plantio"
            onChange={input =>
              setProduct({ ...product, plantingMethod: input.target.value })
            }
          />

          <TextField
            label="Data de colheita"
            onChange={input =>
              setProduct({ ...product, harvestDate: input.target.value })
            }
          />

          <Button onClick={handleSubmit}>Enviar</Button>
        </FormContainer>
      </BodyContainer>
    </Background>
  );
}

export default Cadastro;
