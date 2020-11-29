import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/app.routes';

import AppProvider from './hooks/index';

import GlobalStyle from './assets/styles/global';

function App() {
  return (

    <AppProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>

      <GlobalStyle />
    </AppProvider>
  );
}

export default App;
