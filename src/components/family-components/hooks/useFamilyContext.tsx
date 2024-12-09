import { createContext, useContext, useReducer } from "react";

// Define initial state and reducer
const initialState = { isB1Visible: true, activities: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_B1":
      return { ...state, isB1Visible: !state.isB1Visible };
    case "ADD_ACTIVITY":
      return { ...state, activities: [...state.activities, action.payload]}
    default:
      return state;
  }
};

// Create Context
export const FamilyContext = createContext(null); // Make sure it's exported

export const useFamilyProvider = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
};

export const useFamilyContext = () => {
  const context = useContext(FamilyContext);
  if (!context) {
    throw new Error("useFamilyContext must be used within a FamilyProvider");
  }
  return context;
};