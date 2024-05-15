import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import router from './Routes/Routes.jsx';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './Components/Provider/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="max-w-7xl mx-auto py-3">
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
);
