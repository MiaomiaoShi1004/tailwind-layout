import React from "react";
import CousinB1 from "./CousinB1";
import CousinB2 from "./CousinB2";

const ChildB = () => {
  return (
    <div style={{ border: "2px solid red", padding: "20px" }}>
      <h3>Child B</h3>
      <CousinB1 />
      <CousinB2 />
    </div>
  );
};

export default ChildB;