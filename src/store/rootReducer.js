import { combineReducers } from "redux";
import AuthReducer from "./auth/reducer";
import UserReducer from "./user/reducer";
import AppReducer from "./app/reducer";

const rootReducer = combineReducers({
	User: UserReducer,
	Auth: AuthReducer,
	App: AppReducer,
});

export default rootReducer;
