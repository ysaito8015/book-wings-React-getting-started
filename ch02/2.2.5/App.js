import logo from './logo.svg';
import './App.css';

// App コンポーネントを定義
function App() {
  // 戻り値は出力内容
  return (
    <div className="App">
      <header className="App-header">
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
          Hello, World!
        </a>
      </header>
    </div>
  );
}

// App コンポーネントをエクスポート
export default App;
