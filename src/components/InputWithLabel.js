import React, { useRef, useEffect } from "react";

const InputWithLabel = ({
  onInputChange,
  value,
  id,
  label,
  type = "text",
  children,
  isFocused,
}) => {
  const inputRef = useRef();

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <div>
      <label htmlFor={id}>{children}</label>
      <input
        id={id}
        type={type}
        onChange={onInputChange}
        value={value}
        autoFocus={isFocused}
      />
    </div>
  );
};

export default InputWithLabel;
