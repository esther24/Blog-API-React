import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import { BlogContextProvider } from './context/blogcontext';
import { AuthContextPovider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <AuthContextPovider>
    <App />
    </AuthContextPovider>
  </React.StrictMode>
);
