import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
//const props = 'color: White; background-color: Blue; padding: 3px' ;
const props = {
  color: 'White',
  backgroundColor: 'Blue',
  padding: 3
} ;
root.render(
  <p style={props}>WINGS プロジェクト</p>
);

reportWebVitals(console.log);
