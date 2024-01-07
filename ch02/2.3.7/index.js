import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const attrs = {
  href: 'https://wings.msn.to/',
  download: false,
  target: '_blank',
  rel: 'help'
} ;
root.render(
  <>
    <div><a href={attrs.href} download={attrs.download}
      target={attrs.target} rel={attrs.rel}>サポートページへ</a></div>
    <div><a {...attrs}>サポートページへ</a></div>
  </>
);

reportWebVitals(console.log);
