import logo from './logo.svg';
import './App.css';

// AppClass コンポーネントを定義
function AppClass extends React.Component {
  // 描画する内容を定義
  render() {
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
}

// AppClass コンポーネントをエクスポート
export default AppClass;
