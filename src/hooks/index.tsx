import React from 'react';

import { AuthProvider } from '../contexts/auth';
import { ToastProvaider } from './ToastContext';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ToastProvaider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </ToastProvaider>
  );
}

export default AppProvider;