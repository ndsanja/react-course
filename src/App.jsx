import React, { useReducer } from "react";
import "./App.css";
import ContextComponentC from "./components/ContextComponentC";
import ContextComponentF from "./components/ContextComponentF";
import CounterOne from "./components/CounterOne";
import CounterThree from "./components/CounterThree";
import CounterTwo from "./components/CounterTwo";
import UseReducerFetching from "./components/UseReducerFetching";
import UseReducerFetchingTwo from "./components/UseReducerFetchingTwo";

export const userContext = React.createContext();
export const channelContext = React.createContext();
export const countContext = React.createContext();

export const funct = {
  INCREAMENT: "increament",
  DECREAMENT: "decreament",
  RESET: "reset",
};

const initialState = {
  firstCounter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case funct.INCREAMENT:
      return { ...state, firstCounter: state.firstCounter + action.value };
    case funct.DECREAMENT:
      return { ...state, firstCounter: state.firstCounter - action.value };
    case funct.RESET:
      return { ...state, firstCounter: initialState.firstCounter };
    default:
      return state;
  }
};

const App = () => {
  const channel = {
    name: "SanjaSan",
    subscriber: "1M",
  };

  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App text-2xl my-8">
      <div>{count.firstCounter}</div>
      <userContext.Provider value={"SANJA"}>
        <channelContext.Provider value={channel}>
          <countContext.Provider
            value={{ countState: count, countDispatch: dispatch }}
          >
            <UseReducerFetching />
            <UseReducerFetchingTwo />
          </countContext.Provider>
        </channelContext.Provider>
      </userContext.Provider>
    </div>
  );
};

export default App;
