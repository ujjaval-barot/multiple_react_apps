import {
  GET_TODO_LIST_PENDING,
  UPDATE_TODO_PENDING,
  ADD_TODO_PENDING,
  DELETE_TODO_PENDING,
} from "./actionTypes";

export const getTodoListAction = () => {
  return (dispatch) => {
    dispatch({ type: GET_TODO_LIST_PENDING });
  };
};

export const updateTodoAction = (todo) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_TODO_PENDING, payload: todo });
  };
};

export const addTodoAction = (text) => {
  return (dispatch) => {
    dispatch({ type: ADD_TODO_PENDING, payload: text });
  };
};

export const deleteTodoAction = (id) => {
  return (dispatch) => {
    dispatch({ type: DELETE_TODO_PENDING, payload: id });
  };
};
