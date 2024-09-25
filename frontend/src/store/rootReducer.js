import auth from "./../store/api/auth/authSlice";
import user from "./api/user/userSlice";
import branch from "./api/branch/branchSlice";
import users from "./api/users/usersSlice";
import stock from "./api/stock/stockSlice";
import medicineReq from "./api/requastMedicne/requestSlice";
const rootReducer = { auth, user, branch, users, stock, medicineReq };

export default rootReducer;
