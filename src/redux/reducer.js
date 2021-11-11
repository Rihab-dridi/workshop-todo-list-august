import { ADD, DELET, DONE } from "./action-types";

const initialState = {
  todos: [
    { text: "do the one to one meetings", id: 1, isDone: false },
    { text: "grab a bite", id: 2, isDone: false },
    { text: "attend the workshop ", id: 3, isDone: false },
  ],
  test: "",
};

//reducer: JS function that take a state and an action , and returns the updated state

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELET:
      return {
        ...state,
        todos: state.todos.filter((el) => el.id !== action.payload), //updated state= current state filtered by id
      };
      case DONE: return{
          ...state,
          todos:state.todos.map(el=> el.id=== action.payload?   {...el,isDone:!el.isDone    } :el )
      }

      case ADD: return{
          ...state,
          todos:[...state.todos, action.payload]
      }
    default:
      return state;
  }
};
