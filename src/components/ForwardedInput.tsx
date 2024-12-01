import React, { forwardRef } from "react";

interface ForwardedInputProps {
  placeholder: string;
}

// eslint-disable-next-line react/display-name
const ForwardedInput = forwardRef<HTMLInputElement, ForwardedInputProps>(
  ({ placeholder }, ref) => {
    return <input ref={ref} placeholder={placeholder} />;
  }
);

export default ForwardedInput;