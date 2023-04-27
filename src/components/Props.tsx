import React from "react";
import { MyProps } from "./ParentProps";

export default function Props({ name, age, hobbies }: MyProps) {
  return (
    <div>
      <h2>이름 : {name}</h2>
      <h2>나이 : {age}</h2>
      <h2>취미</h2>
      {hobbies?.map((el, idx: number) => (
        <p key={idx}>{el}</p>
      ))}
    </div>
  );
}
