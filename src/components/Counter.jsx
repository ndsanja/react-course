import React, { useState } from "react";

const Counter = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const decreament = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const increament = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const incrementFive = () => {
    increament();
    increament();
    increament();
    increament();
    increament();
  };
  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={decreament}>-</button>
        <button onClick={increament}>+</button>
        <br />
        <button onClick={() => setCount(initialCount)}>reset</button>
        <button onClick={incrementFive}>tambah5</button>
      </div>
    </div>
  );
};

export default Counter;
