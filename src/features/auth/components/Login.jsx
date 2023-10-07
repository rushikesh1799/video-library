import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./auth.css";
import { loginHandler } from "../authSlice";

const Login = () => {
    const dispatch = useDispatch();

    const [login, setLogin] = useState({
        email: "",
        password: "",
    });

    return (
        <div>
            <h2>Login form</h2>
            <form
                action="submit"
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(loginHandler(login));
                }}
                className="signup_form"
                autoComplete="off"
            >
                <div className="form_input">
                    <label>Email:</label>
                    <input
                        autoFocus
                        type="text"
                        name="fullName"
                        value={login.email}
                        onChange={(e) =>
                            setLogin((prev) => ({
                                ...prev,
                                email: e.target.value,
                            }))
                        }
                        required
                    />
                </div>
                <div className="form_input">
                    <label>Password:</label>
                    <input
                        autoFocus
                        type="text"
                        name="fullName"
                        value={login.password}
                        onChange={(e) =>
                            setLogin((prev) => ({
                                ...prev,
                                password: e.target.value,
                            }))
                        }
                        required
                    />
                </div>
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;
