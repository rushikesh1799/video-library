import React from "react";
import "./navbar.css";
import PersonIcon from "@mui/icons-material/Person";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Navbar = () => {
    const authToken = useSelector((state) => state.auth.token);

    const navigate = useNavigate();

    return (
        <nav className="nav-container">
            <div className="brand">
                <a href="/" className="brand-name">
                    Tech Library
                </a>
            </div>
            <form className="searchbar-container">
                <input
                    type="search"
                    placeholder="Search for videos.."
                    className="nav-search-field"
                />
                <button className="btn-no-decoration text-white" type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i>
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
