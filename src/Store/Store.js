import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk";
import CombineReducers from "./reducers/CombineReducers";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(CombineReducers, composeWithDevTools(applyMiddleware(thunk)))


export default store;

