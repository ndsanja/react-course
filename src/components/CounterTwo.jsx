import React, { useReducer } from "react";

const INCREAMENT = "increament";
const DECREAMENT = "decreament";
const INCREAMENT2 = "increament2";
const DECREAMENT2 = "decreament2";
const RESET = "reset";
const RESET2 = "reset2";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case INCREAMENT:
      return { ...state, firstCounter: state.firstCounter + action.value };
    case DECREAMENT:
      return { ...state, firstCounter: state.firstCounter - action.value };
    case INCREAMENT2:
      return { ...state, secondCounter: state.secondCounter + action.value };
    case DECREAMENT2:
      return { ...state, secondCounter: state.secondCounter - action.value };
    case RESET:
      return { ...state, firstCounter: initialState.firstCounter };
    case RESET2:
      return { ...state, secondCounter: initialState.secondCounter };
    default:
      return state;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>first: {count.firstCounter}</div>
      <div>second: {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: INCREAMENT, value: 1 })}>
        Increament
      </button>
      <button onClick={() => dispatch({ type: DECREAMENT, value: 1 })}>
        Decreament
      </button>
      <button onClick={() => dispatch({ type: INCREAMENT, value: 5 })}>
        Increament 5
      </button>
      <button onClick={() => dispatch({ type: DECREAMENT, value: 5 })}>
        Decreament 5
      </button>
      <button onClick={() => dispatch({ type: INCREAMENT2, value: 100 })}>
        Increament 100
      </button>
      <button onClick={() => dispatch({ type: DECREAMENT2, value: 100 })}>
        Decreament 100
      </button>
      <button onClick={() => dispatch({ type: RESET })}>Reset</button>
      <button onClick={() => dispatch({ type: RESET2 })}>Reset2</button>
    </div>
  );
}

export default CounterTwo;
