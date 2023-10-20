import React from "react";
import "./navbar.css";
import PersonIcon from "@mui/icons-material/Person";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";

const Navbar = () => {
    const authToken = useSelector((state) => state.auth.token);

    const navigate = useNavigate();

    return (
        <nav className="nav-container">
            <div className="brand">
                <YouTubeIcon sx={{ color: "#FFF" }} fontSize="large" />
                <Link to="/" className="brand-name">
                    <span>Developer's</span>
                    <span>Library</span>
                </Link>
            </div>
            <form className="searchbar-container">
                <input
                    type="search"
                    placeholder="Search for videos.."
                    className="nav-search-field"
                />
                <button className="btn-no-decoration text-white" type="submit">
                    <i className="fa fa-search search-icon" aria-hidden="true"></i>
                </button>
            </form>
            <div
                className="profile-icon"
                onClick={() =>
                    authToken ? navigate("/account") : navigate("/login")
                }
            >
                <PersonIcon />
            </div>
        </nav>
    );
};

export default Navbar;
