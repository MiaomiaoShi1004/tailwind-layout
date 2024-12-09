import React from "react";
import { useFamilyContext } from "./hooks/useFamilyContext";

const CousinB1 = () => {
  const { state } = useFamilyContext();

  return (
    <div style={{ backgroundColor: "yellow", padding: "20px" }}>
      {/* <h4>Cousin B1</h4> */}
      <button
        disabled={!state.isB1Visible}
        style={{
          padding: "10px",
          backgroundColor: state.isB1Visible ? "black" : "gray",
          color: "white",
          cursor: state.isB1Visible ? "pointer" : "not-allowed",
          border: "none",
        }}
      >
        Cousin B1
      </button>
    </div>
  );
};

export default CousinB1;