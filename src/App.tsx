import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/app.routes';

import { AuthProvider } from './contexts/auth';

import GlobalStyle from './assets/styles/global';

function App() {
  return (

    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <GlobalStyle />
    </AuthProvider>
  );
}

export default App;
