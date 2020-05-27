import { all, fork } from "redux-saga/effects";
import * as todoSaga from "./todoSaga";

export function* rootSaga() {
  yield all([...Object.values(todoSaga)].map(fork));
}
