import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ul>
    <li>{true}</li>
    <li>{false}</li>
    <li>{undefined}</li>
    <li>{null}</li>
    <li>{0}</li>
    <li>{String(true)}</li>
  </ul>
);

reportWebVitals(console.log);
