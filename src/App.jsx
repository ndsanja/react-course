import React from "react";
import "./App.css";
import ContextComponentC from "./components/ContextComponentC";

export const userContext = React.createContext();
export const channelContext = React.createContext();
const App = () => {
  const channel = {
    name: "SanjaSan",
    subscriber: "1M",
  };
  return (
    <div className="App text-2xl my-8">
      <userContext.Provider value={"Sanja"}>
        <channelContext.Provider value={channel}>
          <ContextComponentC />
        </channelContext.Provider>
      </userContext.Provider>
    </div>
  );
};

export default App;
