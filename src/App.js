import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

export const Sum = (a, b) => {
  return a + b;
};

export const Counter = ({ start }) => {
  const [count, setCount] = useState(start);
  return (
    <>
      <button id="dec" onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button id="inc" onClick={() => setCount(count + 1)}>+</button>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Counter start={0} />
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export function Test() {
  function sum(a, b) {
    return a + b;
  }

  return sum;
}

export default App;
