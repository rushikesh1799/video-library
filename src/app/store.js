import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import userSlice from "../features/user/userSlice";
import videoSlice from "../features/video/videoSlice";

export default configureStore({
    reducer: {
        auth: authSlice,
        user: userSlice,
        video: videoSlice,
    },
});
