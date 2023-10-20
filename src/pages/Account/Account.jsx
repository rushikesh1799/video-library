import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Account.css";
import { setAuthToken, setAuthUser } from "../../features/auth/authSlice";
import { useNavigate } from "react-router";
import {
    setHistory,
    setLikes,
    setNotes,
    setPlaylists,
    setWatchlater,
} from "../../features/user/userSlice";
import { ReactToastify } from "../../utilities/ReactTostify";

const Account = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    function logoutHandler() {
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        dispatch(setAuthToken(""));
        dispatch(setAuthUser(null));
        dispatch(setLikes([]));
        dispatch(setHistory([]));
        dispatch(setPlaylists([]));
        dispatch(setWatchlater([]));
        dispatch(setNotes([]));
        ReactToastify("Log out Successful", "success");
        navigate("/videos");
    }

    return (
        <div className="pagewrapper">
            <Navbar />
            <div className="middle-content">
                <Sidebar />
                <div className="flex-row-center">
                    <div className="logout-container flex-column-center">
                        <div className="large-font-size">
                            Account Details<hr className="section-line"></hr>
                        </div>

                        <div className="flex-row-center profile-details">
                            <div className="flex-column profile-column">
                                <p>Name</p>
                                <p>Email</p>
                            </div>
                            <div className="flex-column  profile-column">
                                <p>{` ${user.firstName} ${user.lastName}`}</p>
                                <p>{` ${user.email}`}</p>
                            </div>
                        </div>
                        <div className="large-font-size">
                            Account Settings<hr className="section-line"></hr>
                        </div>
                        <button
                            className="btn btn-outline-error logout-btn"
                            onClick={logoutHandler}
                        >
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
