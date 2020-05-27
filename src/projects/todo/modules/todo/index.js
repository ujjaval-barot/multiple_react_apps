import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  getTodoListAction,
  updateTodoAction,
  addTodoAction,
  deleteTodoAction,
} from "../../../../actions/todoActions";
import Todo from "./Todo";

export default withRouter(
  connect(
    (state) => ({
      todoList: state.todo.todoList,
      loading: state.todo.loading,
      error: state.todo.errorMessage,
    }),
    (dispatch) => ({
      getTodoList: () => {
        dispatch(getTodoListAction());
      },
      updateTodo: (todo) => {
        dispatch(updateTodoAction(todo));
      },
      addTodo: (text) => {
        dispatch(addTodoAction(text));
      },
      deleteTodo: (text) => {
        dispatch(deleteTodoAction(text));
      },
    })
  )(Todo)
);
