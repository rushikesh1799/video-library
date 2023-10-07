import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import HistoryIcon from "@mui/icons-material/History";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

const Sidebar = () => {
    return (
        <div>
            <aside className="sidebar">
                <NavLink className="sidebar-item" to="/">
                    <HomeIcon />
                    Home
                </NavLink>
                <NavLink className="sidebar-item" to="/videos">
                    <ExploreIcon />
                    Explore
                </NavLink>
                <NavLink className="sidebar-item" to="/playlists">
                    <PlaylistAddIcon />
                    Playlists
                </NavLink>
                <NavLink className="sidebar-item" to="/liked">
                    <ThumbUpIcon />
                    Liked
                </NavLink>
                <NavLink className="sidebar-item" to="/history">
                    <HistoryIcon />
                    History
                </NavLink>
                <NavLink className="sidebar-item" to="/watchlater">
                    <WatchLaterIcon />
                    Watch Later
                </NavLink>
            </aside>
        </div>
    );
};

export default Sidebar;
