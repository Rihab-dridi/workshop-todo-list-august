import "./App.css";
import AddTodo from "./components/addTodo";
import Todolist from "./components/todolist";
import { useState } from "react";

function App() {
  // const [todos, setTodos] = useState([
  //   { text: "save the galaxy", id: 1, isDone: false },
  //   { text: "walk the cat ", id: 2, isDone: false },
  //   { text: "attend the workshop ", id: 3, isDone: false },
  // ]);

  return (
    <div className="App">
      <h1>TODO APP!!</h1>
      <AddTodo />
      <Todolist  />
    </div>
  );
}

export default App;
//every and each value in JS is truthy exept for 0,-0,false,null , undefined,""
