import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Another from './Another';

function App() {
  const [count, setCount] = useState(0);
  function decrement() {
    // setCount(count-1);
    setCount(preCount => preCount - 1)
  }
  function encrement() {
    // setCount(count+1);
    setCount(preCount => preCount + 1)
  }
  const someStyle = {
    background: 'blue',
    color: 'red',
    fontSize: '28px',
    fontWeight: 'bold'
  }
  return (
    <div className="App">
      <Another name="Muath"/>
      <header className="App-header">
        <div>
          <span>{count}</span>
          <button onClick={encrement}>+</button>
          <button onClick={decrement}>-</button>
        </div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {true &&
          <p style={{ background: 'green' }}>{2 + 2}</p>
        }
        <p style={ someStyle }>{2 + 5}</p>
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

export default App;
