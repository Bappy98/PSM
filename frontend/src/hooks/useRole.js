import { useDispatch, useSelector } from "react-redux";
import { selectCurrentToken, selectCurrentUser } from "../store/api/auth/authSlice";
import { useEffect } from "react";
import {getUser} from "./../store/api/user/userSlice"

export default function useRole() {
    const dispatch = useDispatch()
    const token = useSelector(selectCurrentToken)
    const id = useSelector(selectCurrentUser)
    const {user,isLoading,error} = useSelector((state)=>state.user)
    console.log(token);
    useEffect(() => {
        if (token ) {
            dispatch(getUser({ user_id: id }));
        }
    }, [dispatch, token, id]);

    console.log("i am role:",user);

    return {
        userType: user?.userType,
        token,
        user,
        isLoading,
        error
    };
}