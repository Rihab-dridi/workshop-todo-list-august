import React from "react";
import { useDispatch } from "react-redux";
import { deleteHandler, doneHandler } from "../redux/action";

export default function Todo({ task }) {
  //dispatch the action
  const dispatch = useDispatch();
  const deleteTodo = () => {
    dispatch(deleteHandler(task.id));
  };

  const doneTodo=()=>{
    dispatch(doneHandler(task.id))
  }

  return (
    <div className="todoContainer">
      <h3   style={  task.isDone? { textDecoration:"line-through" }:null }>{task.text}</h3>
      <div className="todoBtns">
        <button onClick={deleteTodo}>
          {" "}
          <i class="far fa-trash-alt"></i>{" "}
        </button>
        <button  onClick={doneTodo}   >
        {" "}
          {task.isDone ? (
            <i class="fas fa-check-circle"></i>
          ) : (
            <i class="far fa-check-circle"></i>
          )}{" "}
        </button>
      </div>
    </div>
  );
}
