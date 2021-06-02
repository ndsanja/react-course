import React, { useState } from "react";
import Effect from "./Effect";

function UnmountEffect() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>TOOGLE</button>
      {display && <Effect />}
    </div>
  );
}

export default UnmountEffect;
