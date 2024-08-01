import auth from "./../store/api/auth/authSlice";
import user from "./api/user/userSlice";
import branch from "./api/branch/branchSlice"
import users from './api/users/usersSlice'

const rootReducer = { auth,user,branch,users };

export default rootReducer;
