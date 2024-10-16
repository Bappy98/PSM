import auth from "./../store/api/auth/authSlice";
import user from "./api/user/userSlice";
import users from "./api/users/usersSlice";
import stock from "./api/stock/stockSlice";
import medicineReq from "./api/requastMedicne/requestSlice";
import getAllRequest from "./api/request/requestSlice";
import myProduct from "./api/myProduct/myProductSlice";
import order from "./api/order/orderSlice";
import myOrder from './api/myOrder/myOrderSlice'
const rootReducer = {
  auth,
  user,
  users,
  stock,
  medicineReq,
  getAllRequest,
  myProduct,
  order,
  myOrder
};

export default rootReducer;
