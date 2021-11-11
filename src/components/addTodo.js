import { useDispatch } from "react-redux";
import { addHandler } from "../redux/action";
import { useState } from "react";

export default function AddTodo() {
  const [input, setinput] = useState("");

  const dispatch = useDispatch();

  const addTodo = () => {
    const newTodo = { id: Math.random(), isDone: false, text: input };
    dispatch(addHandler(newTodo));
  };
  return (
    <div className="addTodoContainer">
      <input
        type="text"
        placeholder="add your task here"
        autofocus
        onChange={(e) => setinput(e.target.value)}
      />
      <button onClick={addTodo} >
        {" "}
        <i class="fas fa-plus-square"></i>{" "}
      </button>
    </div>
  );
}
