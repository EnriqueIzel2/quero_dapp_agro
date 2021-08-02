import React from 'react';
import DataProvider from './contexts/loadData';

import Routes from './routes';

function App() {
  return (
    <DataProvider>
      <Routes />
    </DataProvider>
  );
}

export default App;
