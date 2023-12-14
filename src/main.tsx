import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import * as bootstrap from 'bootstrap';
import "./assets/styles/variables.scss";
import 'datatables.net-dt/css/jquery.dataTables.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
)
