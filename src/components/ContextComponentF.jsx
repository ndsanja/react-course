import React, { useContext } from "react";
import { userContext, channelContext } from "../App";

function ContextComponentF() {
  const user = useContext(userContext);
  const { name, subscriber } = useContext(channelContext);
  return (
    <div>
      <h2>this from context userContext: {user}</h2>
      <h2>
        this from context channelContext: {name} {subscriber}
      </h2>
    </div>
  );
}

export default ContextComponentF;
