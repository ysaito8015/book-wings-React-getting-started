import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div>{'Tom &amp; Jerry'}</div>
    <div>Tom &amp; Jerry</div>
    <div>{'Tom \u0026 Jerry'}</div>
    <div>{`Tom ${String.fromCodePoint(38)} Jerry`}</div>
    <div dangerouslySetInnerHTML={{__html: 'Tom &amp; Jerry'}} />
  </>
);

reportWebVitals(console.log);
