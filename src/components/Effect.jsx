import React, { useState, useEffect } from "react";

function Effect() {
  //Name
  const [name, setName] = useState("");
  //---Name

  //Counter
  const [count, setCount] = useState(0);
  const increament = () => {
    setCount((prevState) => prevState + 1);
  };

  useEffect(() => {
    console.log("render document title");
    document.title = `You click ${count} Time`;
  }, [count]);
  //---Counter

  //Mouse Position
  const [x, setX] = useState("");
  const [y, setY] = useState("");

  const logMousePosition = (e) => {
    console.log("mouse Over");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log(`effect mouse ${x}, effect mouse ${y}`);
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("Unmounted mouse component");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  //---Mouse Position

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increament}>tambah</button>
      <br />
      <br />
      <input
        className="border-black border-2 text-center rounded-md"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>{name}</h2>
      <br />
      <br />
      <h2>{x}</h2>
      <h2>{y}</h2>
    </div>
  );
}

export default Effect;
