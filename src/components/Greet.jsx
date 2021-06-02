import React from "react";

const Greet = ({ name, heroName, children }) => {
  return (
    <>
      <h2 className="text-blue-500 font-bold">
        Hello Hello {name} A.K.A {heroName}
      </h2>
      <p>{children}</p>
    </>
  );
};

export default Greet;
