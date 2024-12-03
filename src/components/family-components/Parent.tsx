import React from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";
import { useFamilyProvider, FamilyContext } from "./hooks/useFamilyContext";

const Parent = () => {
  const familyProviderValue = useFamilyProvider(); // Initialize state and dispatch

  return (
    <FamilyContext.Provider value={familyProviderValue}>
      <div
        style={{
          border: "2px solid blue",
          padding: "20px",
          margin: "20px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h2>Parent</h2>
        <ChildA />
        <ChildB />
      </div>
    </FamilyContext.Provider>
  );
};

export default Parent;