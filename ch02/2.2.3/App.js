// ロゴ・スタイルシートをインポート
import logo from './logo.svg';
import './App.css';

// App ンポーネントを定義
function App() {
  // 描画内容を作成
  return (
    <div className="App">
      <header className="App-header">
        {/* 画像要素の描画 */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// App 関数をデフォルトエクスポート
export default App;
