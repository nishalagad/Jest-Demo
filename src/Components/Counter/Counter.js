import React, { useState } from "react";
import Button from "../Button/Button";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Clock app</h1>
      <h3>Current count is {count}</h3>
      <Button label="Click me"></Button>
      {/* <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button> */}
    </div>
  );
};

export default Counter;
