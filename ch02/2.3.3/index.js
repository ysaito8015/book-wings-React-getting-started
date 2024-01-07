import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const content = `<h3>WINGS プロジェクト</h3>
  <img src="https://wings.msn.to/image/wings.jpg" />` ;
root.render(
  <>
    <p>{content}</p>
    <p dangerouslySetInnerHTML={{__html: content}}></p>
  </>
);

reportWebVitals(console.log);
