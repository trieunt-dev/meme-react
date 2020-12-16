import { SET_USER_INFO } from "./actions";
const initState = {
	currentUser: null,
};

const UserReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_USER_INFO:
			return {
				...state,
				currentUser: action.payload.user,
			};

		default:
			return state;
	}
};

export default UserReducer;
