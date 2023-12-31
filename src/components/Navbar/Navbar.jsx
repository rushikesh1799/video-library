import React, { useEffect, useState } from "react";
import "./navbar.css";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";
import {
    getAllSearchFilterVideos,
    getAllVideos,
} from "../../features/video/videoSlice";
import useDebounce from "../../hooks/useDebounce";

const Navbar = () => {
    const authToken = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState("");

    const debounceSearchText = useDebounce(searchText, 500);

    useEffect(() => {
        async function fetchSearchData() {
            dispatch(getAllSearchFilterVideos(debounceSearchText));
        }

        if (debounceSearchText) {
            fetchSearchData();
        } else {
            dispatch(getAllVideos());
        }
    }, [debounceSearchText]);

    const navigate = useNavigate();

    return (
        <nav className="nav-container">
            <div className="brand" onClick={() => navigate("/")}>
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
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button className="btn-no-decoration text-white" type="submit">
                    <i
                        className="fa fa-search search-icon"
                        aria-hidden="true"
                    ></i>
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
