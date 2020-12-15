import { combineReducers } from "redux";
import AuthReducer from "./auth/reducer";
import UserReducer from "./user/reducer";

const rootReducer = combineReducers({
	User: UserReducer,
	Auth: AuthReducer,
});

export default rootReducer;
