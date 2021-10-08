import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { authReducer } from "./auth/reducer";
import { reducer } from "./app/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  app: reducer,
});

const customMiddleWare = (state) => (next) => (action) => {
  return typeof action === "function"
    ? action(store.dispatch, store.getState)
    : next(action);
};

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancer = composeEnhancers(applyMiddleware(customMiddleWare));

export const store = createStore(rootReducer, enhancer);
