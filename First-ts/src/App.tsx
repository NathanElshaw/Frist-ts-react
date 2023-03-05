import { useState } from "react";
import "./App.css";
import FirstProp from "./Components/firstProp";

function App() {
  const [state] = useState("Hello World");

  let [count = 0, setCount] = useState(0);
  function add() {
    count++;
    setCount(count);
  }
  function minus() {
    count--;
    setCount(count);
  }
  return (
    <>
      <p>{count}</p>
      <button
        onClick={() => {
          minus();
        }}
      >
        Minus
      </button>
      <button
        onClick={() => {
          add();
        }}
      >
        Add
      </button>
      <FirstProp input={state} secondInput="and Again!" />
    </>
  );
}

export default App;
