import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./auth.css";
import useLoginHandler from "../Hooks/useLoginHandler";
import Navbar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const { loginHandler } = useLoginHandler();
    const [login, setLogin] = useState({
        email: "",
        password: "",
    });
    const location = useLocation();
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="pagewrapper">
            <Navbar />
            <div className="middle-content">
                <Sidebar />
                <div className="auth-container flex-column-center">
                    <h2 className="header2">Login form</h2>
                    <form
                        action="submit"
                        onSubmit={(e) => {
                            e.preventDefault();
                            if (login.email === "" || login.password === "") {
                                alert("Please fill all the required details!");
                            }
                            dispatch(loginHandler(login));
                        }}
                        className="form-auth"
                        autoComplete="off"
                    >
                        <div className="form-input">
                            <label className="input-label">Email: *</label>
                            <input
                                className="input-primary border-box"
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
                        <div className="form-input password-input">
                            <label className="input-label">Password: *</label>
                            <input
                                className="input-primary border-box"
                                autoFocus
                                type={showPassword ? "text" : "password"}
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
                            <button
                                className="btn-no-decoration cursor-pointer text-white"
                                type="button"
                                // disabled={disableLogin}
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <VisibilityIcon
                                        sx={{
                                            position: "absolute",
                                            top: "4px",
                                            right: "24px",
                                        }}
                                        className="input-icon-style"
                                    />
                                ) : (
                                    <VisibilityOffIcon
                                        sx={{
                                            position: "absolute",
                                            top: "4px",
                                            right: "24px",
                                        }}
                                        className="input-icon-style"
                                    />
                                )}
                            </button>
                        </div>
                        <button className="btn-auth">Login</button>
                        <button
                            className="btn-outline-primary btn-auth guest-button"
                            onClick={(e) => {
                                setLogin((prev) => ({
                                    ...prev,
                                    email: e.target.value,
                                    password: e.target.value,
                                }));
                            }}
                        >
                            Login as Guest
                        </button>
                        <div className="flex-row-center account-line-margin">
                            <span>Don't have an account?</span>
                            <Link
                                to="/signup"
                                className="btn-link btn-link-primary1"
                                state={location.state}
                            >
                                Create One
                            </Link>
                        </div> 
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
