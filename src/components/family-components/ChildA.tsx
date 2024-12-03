import React from "react";
import { useFamilyContext } from "./hooks/useFamilyContext";

const ChildA = () => {
  const { dispatch } = useFamilyContext();

  return (
    <div style={{ border: "2px solid green", padding: "20px" }}>
      <h3>Child A</h3>
      <button onClick={() => dispatch({ type: "TOGGLE_B1" })}>
        Toggle Cousin B1
      </button>
    </div>
  );
};

export default ChildA;