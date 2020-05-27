import { takeEvery, put } from "redux-saga/effects";
import { getTodoList, updateTodo, addTodo, deleteTodo } from "../api/todoApi";
import {
  GET_TODO_LIST_PENDING,
  GET_TODO_LIST_SUCCESS,
  GET_TODO_LIST_FAIL,
  UPDATE_TODO_PENDING,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAIL,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAIL,
  ADD_TODO_PENDING,
  DELETE_TODO_PENDING,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAIL,
} from "../actions/actionTypes";

function* getTodoAsync() {
  try {
    const response = yield getTodoList();
    yield put({ type: GET_TODO_LIST_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: GET_TODO_LIST_FAIL, payload: error });
  }
}

function* UpdateTodoAsync(action) {
  try {
    const response = yield updateTodo(action.payload);
    yield put({ type: UPDATE_TODO_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: UPDATE_TODO_FAIL, payload: error });
  }
}

function* AddTodoAsync(action) {
  try {
    const response = yield addTodo(action.payload);
    yield put({ type: ADD_TODO_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: ADD_TODO_FAIL, payload: error });
  }
}

function* DeleteTodoAsync(action) {
  try {
    const response = yield deleteTodo(action.payload);
    yield put({ type: DELETE_TODO_SUCCESS, payload: response.data });
    yield put({ type: GET_TODO_LIST_PENDING });
  } catch (error) {
    yield put({ type: DELETE_TODO_FAIL, payload: error });
  }
}

export function* watchGetTodo() {
  yield takeEvery(GET_TODO_LIST_PENDING, getTodoAsync);
}

export function* watchUpdateTodo() {
  yield takeEvery(UPDATE_TODO_PENDING, UpdateTodoAsync);
}

export function* watchAddTodo() {
  yield takeEvery(ADD_TODO_PENDING, AddTodoAsync);
}

export function* watchDeleteTodo() {
  yield takeEvery(DELETE_TODO_PENDING, DeleteTodoAsync);
}
