import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./auth.css";
import Navbar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import useSignupHandler from "../Hooks/useSignupHandler";

const Signup = () => {
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();

    const { signupHandler } = useSignupHandler();

    const [signup, setSignup] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    return (
        <div className="pagewrapper">
            <Navbar />
            <div className="middle-content">
                <Sidebar />
                <div className="auth-container flex-column-center signup-container">
                    <h2 className="header2">Sign Up form</h2>
                    <form
                        action="submit"
                        onSubmit={(e) => {
                            e.preventDefault();
                            dispatch(signupHandler(signup));
                        }}
                        className="form-auth"
                        autoComplete="off"
                    >
                        <div className="form-input">
                            <label className="input-label">First Name: *</label>
                            <input
                                className="input-primary border-box"
                                autoFocus
                                type="text"
                                name="fullName"
                                value={signup.firstName}
                                onChange={(e) =>
                                    setSignup((prev) => ({
                                        ...prev,
                                        firstName: e.target.value,
                                    }))
                                }
                                required
                            />
                        </div>
                        <div className="form-input">
                            <label className="input-label">Last Name: *</label>
                            <input
                                className="input-primary border-box"
                                autoFocus
                                type="text"
                                name="fullName"
                                value={signup.lastName}
                                onChange={(e) =>
                                    setSignup((prev) => ({
                                        ...prev,
                                        lastName: e.target.value,
                                    }))
                                }
                                required
                            />
                        </div>
                        <div className="form-input">
                            <label className="input-label">Email: *</label>
                            <input
                                className="input-primary border-box"
                                autoFocus
                                type="text"
                                name="fullName"
                                value={signup.email}
                                onChange={(e) =>
                                    setSignup((prev) => ({
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
                                value={signup.password}
                                onChange={(e) =>
                                    setSignup((prev) => ({
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
                        <button className="btn-auth">SIGN UP</button>
                        <div className="flex-row-center account-line-margin">
                            <span>Already have an account?</span>
                            <Link
                                to="/login"
                                className="btn-link btn-link-primary1"
                                state={location.state}
                            >
                                Login here
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
