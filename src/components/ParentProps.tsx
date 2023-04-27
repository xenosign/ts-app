import React from "react";
import Props from "./Props";

export interface MyProps {
  name: string;
  age: number;
  hobbies: string[];
}

export default function ParentProps() {
  const tetz: MyProps = {
    name: "tetz",
    age: 39,
    hobbies: ["PS5", "Drinking"],
  };

  return (
    <>
      <Props {...tetz} />
    </>
  );
}
