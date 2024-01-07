import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const dest = 'https://ja.react.dev' ;
root.render(
  <>
    <div><a href={dest}>React 本家サイト</a></div>
    <div><a href="{dest}">React 本家サイト</a></div>
    <div><a href="{dest}/docs">React 本家サイト</a></div>
    <div><a href={dest + '/docs'}>React 本家サイト</a></div>
  </>
);

reportWebVitals(console.log);
