import { createStore } from "redux";
import { todoReducer } from "./src/@redux/reducers";

export const store = createStore(todoReducer);
window.store = store;