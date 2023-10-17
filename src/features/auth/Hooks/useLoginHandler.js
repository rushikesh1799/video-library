import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginService } from "../../../services/authServices";
import { useDispatch } from "react-redux";
import { setInitialUserData } from "../../user/userSlice";
import { useNavigate } from "react-router";
import { setAuthToken } from "../authSlice";

const useLoginHandler = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginHandler = createAsyncThunk(
        "auth/loginUser",
        async (userLoginData) => {
            try {
                const { data, status } = await loginService(userLoginData);
                const { user } = data;
                console.log("user", user);
                if (status === 201) {
                    localStorage.setItem("authToken", user.token);
                    localStorage.setItem(
                        "user",
                        JSON.stringify({
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.email,
                        })
                    );
                }
                dispatch(
                    setInitialUserData({
                        likes: user.likes,
                        history: user.history,
                        playlists: user.playlists,
                        watchlater: user.watchlater,
                        notes: user.notes,
                    })
                );
                dispatch(setAuthToken(user.token));
                navigate("/videos");
            } catch (error) {
                console.log(error);
            }
        }
    );
    return { loginHandler };
};

export default useLoginHandler;
