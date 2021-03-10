import { createStore } from "redux";
import {reducerCenter  } from "./reducer";
const storeState = createStore(reducerCounter);
export default storeState;