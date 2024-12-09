import React from "react";
import { useFamilyContext } from "./hooks/useFamilyContext";

const ChildA = () => {
  const { state, dispatch } = useFamilyContext();

  return (
    <div style={{ border: "2px solid green", padding: "20px" }}>
      <h2>Child A</h2>
      <p>Want to learn: </p>
      {/* the list goes here.  */}
      <ul>
        {state.activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>

      <button onClick={() => dispatch({ type: "TOGGLE_B1" })}>
        Toggle Cousin B1
      </button>
    </div>
  );
};

export default ChildA;