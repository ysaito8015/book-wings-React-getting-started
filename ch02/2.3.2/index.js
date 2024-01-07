import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const name = '鈴木' ;
root.render(
  <p>こんにちは、{name}です！</p>
);

reportWebVitals(console.log);
