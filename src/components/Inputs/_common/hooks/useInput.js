import { useState } from "react";

export function useInput(inputDOM, onFocus, onBlur) {
  const [focused, setFocused] = useState(false);
  const handleFocus = e => {
    e.preventDefault();
    setFocused(true);
    onFocus(e);
    inputDOM.current && inputDOM.current.focus();
  };

  const handleBlur = e => {
    setFocused(false);
    onBlur(e);
    inputDOM.current && inputDOM.current.blur();
  };

  return {
    focused,
    setFocused,
    handleFocus,
    handleBlur,
  };
}
