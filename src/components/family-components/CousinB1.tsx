import React from "react";
import { useFamilyContext } from "./hooks/useFamilyContext";

const CousinB1 = () => {
  const { state, dispatch } = useFamilyContext();

  // Pass a `disabled` prop to all buttons
  const isDisabled = state.isB1Visible;

  const handleClick = (activity) => {
    dispatch({ type: "ADD_ACTIVITY", payload: activity });
  };

  return (
    <div style={{ backgroundColor: "yellow", padding: "20px" }}>
      <h4>Cousin B1</h4>
      <button
        onClick={() => handleClick("Sing")}
        disabled={isDisabled}
        style={{
          padding: "10px",
          backgroundColor: isDisabled ? "gray" : "black",
          color: "white",
          cursor: isDisabled ? "not-allowed" : "pointer",
          margin: "5px",
        }}
      >
        Sing
      </button>
      <button
        onClick={() => handleClick("Dance")}
        disabled={isDisabled}
        style={{
          padding: "10px",
          backgroundColor: isDisabled ? "gray" : "black",
          color: "white",
          cursor: isDisabled ? "not-allowed" : "pointer",
          margin: "5px",
        }}
      >
        Dance
      </button>
      <button
        onClick={() => handleClick("Sport")}
        disabled={isDisabled}
        style={{
          padding: "10px",
          backgroundColor: isDisabled ? "gray" : "black",
          color: "white",
          cursor: isDisabled ? "not-allowed" : "pointer",
          margin: "5px",
        }}
      >
        Sport
      </button>
    </div>
  );
};

export default CousinB1;