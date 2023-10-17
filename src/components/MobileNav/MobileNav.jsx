import React from "react";
import { Link } from "react-router-dom";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import HistoryIcon from "@mui/icons-material/History";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PersonIcon from "@mui/icons-material/Person";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

const MobileNav = () => {
    return (
        <div className="pagewrapper">
            <Navbar />
            <div className="middle-content mobile-nav-page">
                <Sidebar />
                <div className="mobile-nav-options flex-column">
                    <Link
                        to="/liked"
                        className="sidebar-item mobile-nav-element"
                    >
                        <ThumbUpIcon />
                        <span>Liked</span>
                    </Link>

                    <Link
                        to="/history"
                        className="sidebar-item mobile-nav-element"
                    >
                        <HistoryIcon />
                        <span>History</span>
                    </Link>

                    <Link
                        to="/watchlater"
                        className="sidebar-item mobile-nav-element"
                    >
                        <WatchLaterIcon />
                        <span>Watch Later</span>
                    </Link>

                    <Link
                        to="/account"
                        className="sidebar-item mobile-nav-element"
                    >
                        <PersonIcon />
                        <span>Your Account</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;
