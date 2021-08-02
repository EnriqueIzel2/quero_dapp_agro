import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Cadastro from './pages/Cadastro';
import Entregas from './pages/Entregas';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/produtos" component={Produtos} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/entregas" component={Entregas} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
