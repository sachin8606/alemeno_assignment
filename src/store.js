import { createStore } from "redux";
import rootreducer from "./reducers/rootReducer";
const store = createStore(rootreducer)
export default store;