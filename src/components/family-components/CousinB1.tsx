import React from "react";
import { useFamilyContext } from "./hooks/useFamilyContext";

const CousinB1 = () => {
  const { state } = useFamilyContext();

  if (!state.isB1Visible) return null;

  return (
    <div style={{ backgroundColor: "yellow", padding: "20px" }}>
      <h4>Cousin B1</h4>
    </div>
  );
};

export default CousinB1;