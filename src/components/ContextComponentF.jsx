import React, { useContext } from "react";
import { userContext, channelContext, countContext } from "../App";
import { funct } from "../App";

function ContextComponentF() {
  const user = useContext(userContext);
  const { name, subscriber } = useContext(channelContext);
  const { countState, countDispatch } = useContext(countContext);
  return (
    <div>
      <h2>this from context userContext: {user}</h2>
      <h2>
        this from context channelContext: {name} {subscriber}
      </h2>
      <div>
        <button
          onClick={() => countDispatch({ type: funct.INCREAMENT, value: 10 })}
        >
          INCREAMENT
        </button>
        <button
          onClick={() => countDispatch({ type: funct.DECREAMENT, value: 10 })}
        >
          DECREAMENT
        </button>
        <button onClick={() => countDispatch({ type: funct.RESET })}>
          RESET
        </button>
      </div>
      <div>{countState.firstCounter}</div>
    </div>
  );
}

export default ContextComponentF;
