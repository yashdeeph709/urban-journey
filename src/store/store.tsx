import { createStore } from "redux";

const initialState = {
  todos: [],
};

function reducer(state = initialState, action) {
  console.log("CreateStore: ", state);
  switch (action.type) {
    case "ADD":
      return {
        todos: [...state.todos, action.data],
      };
    case "REMOVE":
      return {
        todos: [],
      };
    default:
      return state;
  }
}

export const storeInstance = createStore(reducer);
