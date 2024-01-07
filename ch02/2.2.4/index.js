import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() => {
  root.render(
    <p>現在時刻: {(new Date()).toLocaleString()}</p>
  );
}, 1000) ;

reportWebVitals(console.log);
