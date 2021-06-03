import React from "react";
import "./App.css";
import ContextComponentC from "./components/ContextComponentC";
import CounterOne from "./components/CounterOne";
import CounterThree from "./components/CounterThree";
import CounterTwo from "./components/CounterTwo";

export const userContext = React.createContext();
export const channelContext = React.createContext();
const App = () => {
  const channel = {
    name: "SanjaSan",
    subscriber: "1M",
  };
  return (
    <div className="App text-2xl my-8">
      <CounterOne />
      <CounterTwo />
      <CounterThree />
    </div>
  );
};

export default App;
