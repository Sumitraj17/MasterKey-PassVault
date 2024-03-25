import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Your main application component
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer /> {/* Render ToastContainer at the top level */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
