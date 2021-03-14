import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
	contestListReducer,
	contestDetailsReducer,
} from "./reducers/contestReducers";

const reducer = combineReducers({
	contestList: contestListReducer,
	contestDetail: contestDetailsReducer,
});

const middleware = [thunk];

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
