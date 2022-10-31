import React, { useState } from "react";
import { CounterContainer } from "./styled";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <CounterContainer>
      <h2>
        Counter: <b>{count}</b>
      </h2>
      <web-button onClick={increment} name={"Increment"}></web-button>
      <web-button onClick={decrement} name={"Decrement"}></web-button>
    </CounterContainer>
  );
};

export default Counter;
