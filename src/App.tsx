import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Input from "./components/Input";
import Props from "./components/Props";
import Todo from "./components/Todo";

export interface MyProps {
  name: string;
  age: number;
  hobbies: string[];
}

function App() {
  const tetz: MyProps = {
    name: "tetz",
    age: 39,
    hobbies: ["PS5", "Drinking"],
  };

  return (
    <div className="App">
      <Counter />
      <Input />
      <Props {...tetz} />
      <Todo />
    </div>
  );
}

export default App;
