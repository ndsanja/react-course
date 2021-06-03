import React, { useReducer } from "react";

const INCREAMENT = "increament";
const DECREAMENT = "decreament";
const RESET = "reset";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case INCREAMENT:
      return state + 1;
    case DECREAMENT:
      return state - 1;
    case RESET:
      return initialState;
    default:
      return state;
  }
};

function CounterOne() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch(INCREAMENT)}>Increament</button>
      <button onClick={() => dispatch(DECREAMENT)}>Decreament</button>
      <button onClick={() => dispatch(RESET)}>Reset</button>
    </div>
  );
}

export default CounterOne;
