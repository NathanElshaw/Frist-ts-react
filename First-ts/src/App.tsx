import { FC, useState } from "react";
import "./App.css";
import FirstProp from "./Components/firstProp";

function App() {
  const [state, setState] = useState("Hello World");

  return (
    <>
      <button
        onClick={() => {
          setState("Good Night");
        }}
      >
        Click
      </button>
      <FirstProp input={state} secondInput="and Again!" />
    </>
  );
}

export default App;
