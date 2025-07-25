import { configureStore, Tuple } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { all } from "redux-saga/effects";
import { actions, reducers, sagas, selectors } from "./slices";

const rootSaga = function* () {
  yield all(sagas.map((s) => s()));
};
const sagaMiddleware = createSagaMiddleware();

const createRootReducer = () => combineReducers(reducers);
const rootReducer = createRootReducer();

const persistConfig = {
  key: "App-root",
  storage,
  blackList: ["ui"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: () => new Tuple(sagaMiddleware),
});
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
export { actions, persistor, selectors };
