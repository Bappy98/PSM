// hooks/useAuthCheck.js
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../features/auth/authSlice";

export default function useAuthCheck() {
    const dispatch = useDispatch();
    const [authChecked, setAuthChecked] = useState(false);
    const [unloadingPage, setUnloadingPage] = useState(false); // Flag to track page unload

    useEffect(() => {
        const localAuth = localStorage.getItem("auth");

        if (localAuth) {
            const auth = JSON.parse(localAuth);
            if (auth?.access_token) {
                dispatch(userLoggedIn({ access_token: auth.access_token }));
            }
        }

        setAuthChecked(true);

        // Clear auth from localStorage when the user closes the tab
        const handleUnload = (event) => {
            // Check if event is null or not to determine if it's a page reload or tab close
            if (!event || !event.currentTarget.performance.navigation.type) {
                localStorage.removeItem("auth");
            }
        };

        window.addEventListener("beforeunload", handleUnload);

        return () => {
            setUnloadingPage(true); // Setting the flag before unmounting
            window.removeEventListener("beforeunload", handleUnload);
        };
    }, [dispatch, setAuthChecked, setUnloadingPage]);

    // Returning authChecked and the flag indicating page unloading
    return { authChecked, unloadingPage };
}
