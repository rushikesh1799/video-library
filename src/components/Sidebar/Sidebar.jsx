import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import HistoryIcon from "@mui/icons-material/History";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch } from "react-redux";
import { setCategory } from "../../features/video/videoSlice";

const Sidebar = () => {
    const dispatch = useDispatch();
    return (
        <>
            <aside className="sidebar">
                <NavLink className="sidebar-item" to="/">
                    <HomeIcon />
                    Home
                </NavLink>
                <NavLink
                    className="sidebar-item"
                    to="/videos"
                    onClick={() => {
                        dispatch(setCategory("All"));
                    }}
                >
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
            <div className="mobile-bottom-nav">
                <NavLink to="/videos" className="mobile-nav-item">
                    <div className="mobile-nav-item">
                        <ExploreIcon icon="compass" className="bottom-icon" />
                        <span>Explore</span>
                    </div>
                </NavLink>
                <NavLink to="/playlists" className="mobile-nav-item">
                    <div className="mobile-nav-item">
                        <div className="icon-chip">
                            <PlaylistAddIcon />
                        </div>
                        <span>Playlists</span>
                    </div>
                </NavLink>
                {/* <NavLink to="/uploadvideo" className="mobile-nav-item">
                        <div className="mobile-nav-item">
                            <div className="mobile-nav-item">
                                <FontAwesomeIcon
                                    icon="upload"
                                    className="bottom-icon"
                                />
                                <span>Upload Video</span>
                            </div>
                        </div>
                    </NavLink> */}
                <NavLink to="/profile" className="mobile-nav-item">
                    <div className="mobile-nav-item">
                        <PersonIcon icon="user" className="bottom-icon" />
                        <span>Profile</span>
                    </div>
                </NavLink>
            </div>
        </>
    );
};

export default Sidebar;
