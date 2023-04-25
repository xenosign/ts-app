import React, { useRef, useState } from "react";
import List from "./List";

export interface Task {
  task: string;
  done: boolean;
}

export default function Todo() {
  const [taskArr, setTaskArr] = useState<Task[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const addTask = (): void => {
    let copyArr: Task[] = [...taskArr];
    if (inputRef.current !== null) {
      copyArr.push({ task: inputRef.current.value, done: false });
      setTaskArr((cur: Task[]) => copyArr);
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={addTask}>할 일 추가</button>
      <h1>할 일 목록</h1>
      {taskArr?.map((el, index) => (
        <List {...el} key={index} />
      ))}
    </>
  );
}
