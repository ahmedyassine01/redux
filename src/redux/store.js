import { reducer } from "./reducer";
import { createStore } from "redux";
export const devtools=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


export const store=createStore(reducer,devtools)