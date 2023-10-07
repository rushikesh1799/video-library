import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./auth.css";
import { signUpHandler } from "../authSlice";

const Signup = () => {
    const dispatch = useDispatch();

    const [signup, setSignup] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    return (
        <div>
            <h2>Sign Up form</h2>
            <form
                action="submit"
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(signUpHandler(signup));
                }}
                className="signup_form"
                autoComplete="off"
            >
                <div className="form_input">
                    <label>First Name:</label>
                    <input
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
                <div className="form_input">
                    <label>Last Name:</label>
                    <input
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
                <div className="form_input">
                    <label>Email:</label>
                    <input
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
                <div className="form_input">
                    <label>Password:</label>
                    <input
                        autoFocus
                        type="text"
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
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Signup;
