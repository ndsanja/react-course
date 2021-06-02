import React, { useState } from "react";

const Message = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <input
        className="border-black border-2 text-center rounded-md"
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        className="border-black border-2 text-center rounded-md"
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <br />
      <br />
      <h2>{name.firstName}</h2>
      <h2>{name.lastName}</h2>
    </div>
  );
};

export default Message;
