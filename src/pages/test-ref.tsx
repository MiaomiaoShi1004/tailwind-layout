import React, { createRef } from "react";
import ForwardedInput from "../components/ForwardedInput"; // Adjust path if necessary

const TestRef = () => {
  const inputRef = createRef<HTMLInputElement>();

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus the input element
    }
  };

  return (
    <div>
      <h1>Test ForwardRef</h1>
      <ForwardedInput ref={inputRef} placeholder="Type something..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default TestRef;