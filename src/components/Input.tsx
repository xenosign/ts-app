import React, { useRef, useState } from "react";

export default function Input() {
  const [string, setString] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const varRef = useRef<string>("");

  const handleChange = (e: any): void => {
    setString(e.target.value);
    varRef.current = e.target.value;
    console.log(varRef);
  };

  return (
    <>
      <h1>{string === "" ? "값을 입력하세요" : string}</h1>
      <input ref={inputRef} onChange={handleChange} />
    </>
  );
}
