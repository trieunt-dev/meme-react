import HomePage from "../pages/HomePage";
import ChangePassword from "../pages/ChangePassword";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PostCreate from "../pages/PostCreate";
import PostDetail from "../pages/PostDetail";
import UserDetail from "../pages/UserDetail";
import UserProfile from "../pages/UserProfile";

import { PATHS } from "../constants";

const Routers = [
	{
		exact: true,
		path: PATHS.HOME_PAGE,
		component: HomePage,
	},
	{
		exact: true,
		path: PATHS.CHANGE_PASSWORD,
		component: ChangePassword,
	},
	{
		exact: true,
		path: PATHS.LOGIN,
		component: Login,
	},
	{
		exact: true,
		path: PATHS.REGISTER,
		component: Register,
	},
	{
		exact: true,
		path: PATHS.POST_CREATE,
		component: PostCreate,
	},
	{
		exact: true,
		path: PATHS.POST_DETAIL,
		component: PostDetail,
	},
	{
		exact: true,
		path: PATHS.USER_DETAIL,
		component: UserDetail,
	},
	{
		exact: true,
		path: PATHS.USER_PROFILE,
		component: UserProfile,
	},
];

export { Routers };
