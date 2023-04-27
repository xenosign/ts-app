import React, { useRef } from "react";

export default function ChangeColor() {
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const varRef = useRef<string>("");

  const handleDivColor = (): void => {
    if (inputRef.current && divRef.current) {
      divRef.current.style.backgroundColor = inputRef.current.value;
      varRef.current = inputRef.current.value;
      console.log(varRef.current);
    }
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleDivColor}>색상 변경</button>
      <div style={{ backgroundColor: "orange" }} ref={divRef}>
        색상을 변경할 DIV
      </div>
    </>
  );
}
