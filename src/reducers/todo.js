import {
  GET_TODO_LIST_PENDING,
  GET_TODO_LIST_SUCCESS,
  GET_TODO_LIST_FAIL,
  UPDATE_TODO_PENDING,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAIL,
  ADD_TODO_FAIL,
  ADD_TODO_SUCCESS,
  ADD_TODO_PENDING,
  DELETE_TODO_PENDING,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAIL,
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  errorMessage: null,
  todoList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO_LIST_PENDING:
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };

    case GET_TODO_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMessage: null,
        todoList: action.payload,
      };

    case GET_TODO_LIST_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    case UPDATE_TODO_PENDING:
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };

    case UPDATE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMessage: null,
      };

    case UPDATE_TODO_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };

    case ADD_TODO_PENDING:
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };

    case ADD_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMessage: null,
        todoList: [...state.todoList, { ...action.payload }],
      };

    case ADD_TODO_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    case DELETE_TODO_PENDING:
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };

    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMessage: null,
      };

    case DELETE_TODO_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
