import { createAsyncThunk } from "@reduxjs/toolkit";
import { signUpService } from "../../../services/authServices";
import { useDispatch } from "react-redux";
import { setInitialUserData } from "../../user/userSlice";
import { useNavigate } from "react-router";
import { setAuthToken, setAuthUser, setLoginError } from "../authSlice";
import { ReactToastify } from "../../../utilities/ReactTostify";

const useSignupHandler = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signupHandler = createAsyncThunk(
        "auth/signupUser",
        async (userSignupData) => {
            try {
                const { data, status } = await signUpService(userSignupData);
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
                dispatch(
                    setAuthUser({
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                    })
                );
                navigate("/videos");
                ReactToastify("Sign Up Successful", "success");
            } catch (error) {
                ReactToastify(error.response.data.message, "error");
                dispatch(
                    setLoginError({ message: error.response.data.message })
                );
            }
        }
    );
    return { signupHandler };
};

export default useSignupHandler;
