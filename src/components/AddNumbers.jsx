import React, { useState } from "react";

function AddNumbers() {
  const [items, setItems] = useState([]);

  const addItems = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 1000000) + 1,
      },
    ]);
  };
  return (
    <div>
      <button onClick={addItems}>Add Number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default AddNumbers;
