import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { loginService, signUpService } from "../../services/authServices";

export const loginHandler = createAsyncThunk(
    "auth/loginUser",
    async (userLoginData) => {
        try {
            const { data, status } = await loginService(userLoginData);
            const { user } = data;
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
        } catch (error) {
            console.log(error);
        }
    }
);

export const signUpHandler = createAsyncThunk(
    "auth/signUpUser",
    async (userData) => {
        try {
            const { data, status } = await signUpService(userData);
            const { user } = data;
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
            return user;
        } catch (error) {
            console.log(error);
        }
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: localStorage.getItem("authToken") || null,
        user: JSON.parse(localStorage.getItem("user")) || null,
        status: "idle",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signUpHandler.pending, (state) => {
                state.status = "loading";
            })
            .addCase(signUpHandler.fulfilled, (state, action) => {
                const user = action.payload;
                state.status = "success";
                state.token = user.token;
                state.user = {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                };
            })
            .addCase(signUpHandler.rejected, (state, action) => {
                state.status = "idle";
            });
    },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
