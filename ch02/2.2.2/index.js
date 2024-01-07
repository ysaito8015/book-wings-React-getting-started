// React 関連のライブラリをインポート
import React from 'react';
import ReactDOM from 'react-dom/client';
// アプリ固有のコードをインポート
import './index.css';
import App from './App';
// パフォーマンス監視のためのサービスをインポート
import reportWebVitals from './reportWebVitals';

// Rect アプリを描画
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// パフォーマンス監視ツールを有効化
reportWebVitals(console.log);
