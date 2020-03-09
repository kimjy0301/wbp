import { combineReducers } from "redux";
import counter from "./counter";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  counter
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([]);
}
