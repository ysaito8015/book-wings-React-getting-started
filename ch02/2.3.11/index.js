import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './class.css' ;

const root = ReactDOM.createRoot(document.getElementById('root'));
const title = 'これからはじめるVue.js 3 実践入門' ;
// root.render(
//   <div className="main">
//     <p>「{title}」（SB クリエイティブ刊）</p>
//     <img src="https://wings.msn.to/books/978-4-8156-1336-5/978-4-8156-1336-5.jpg" alt={title} />
//     絶賛発売中！
//   </div>
// );
root.render(
  React.createElement(
    'div',
    { className: 'main' },
    React.createElement(
      'p',
      null,
      `「${title}」（SB クリエイティブ刊）`
    ),
    React.createElement(
      'img',
      {
        src: 'https://wings.msn.to/books/978-4-8156-1336-5/978-4-8156-1336-5.jpg',
        alt: title
      }
    ),
    '絶賛発売中！'
  ),
);

reportWebVitals(console.log);
