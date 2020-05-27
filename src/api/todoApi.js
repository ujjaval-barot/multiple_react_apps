import Axios from "axios";

const BASE_URL = "http://localhost:3030";
const url = `/todoList`;
let headers = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const getTodoList = () => {
  return Axios.get(BASE_URL + url);
};

export const updateTodo = (todo) => {
  return Axios.put(BASE_URL + url + "/" + todo.id, todo, headers);
};

export const addTodo = (text) => {
  let data = {
    todo: text,
    completed: false,
  };

  return Axios.post(BASE_URL + url, data, headers);
};

export const deleteTodo = (id) => {
  return Axios.delete(BASE_URL + url + "/" + id, headers);
};
