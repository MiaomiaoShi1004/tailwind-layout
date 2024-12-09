import React from "react";
import { useFamilyContext } from "./hooks/useFamilyContext";

const CousinB1 = () => {
  const { state } = useFamilyContext();

  // Pass a `disabled` prop to all buttons
  const isDisabled = state.isB1Visible;

  return (
    <div style={{ backgroundColor: "yellow", padding: "20px" }}>
      <button
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