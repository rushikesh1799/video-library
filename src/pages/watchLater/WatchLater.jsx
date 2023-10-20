import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getAllWatchLater,
    getAllWatchlaterVideos,
} from "../../features/user/userSlice";
import VideoCard from "../videoListing/VideoCard";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./watchlater.css";

import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { NavLink } from "react-router-dom";

const WatchLater = () => {
    const dispatch = useDispatch();
    const authToken = useSelector((state) => state.auth.token);
    const watchLaterVideos = useSelector(getAllWatchlaterVideos);

    // useEffect(() => {
    //     dispatch(getAllWatchLater(authToken));
    // }, [dispatch]);

    return (
        <div className="pagewrapper">
            <Navbar />
            <div className="middle-content">
                <Sidebar />
                <div className="flex-column-start single-playlist-header">
                    <div className="large-font-size playlist-name-weight">
                        <>
                            <WatchLaterIcon fontSize="small" />
                            Watch Later
                        </>
                    </div>
                    <div>{watchLaterVideos.length} video(s)</div>
                </div>
                <hr />
                {watchLaterVideos.length === 0 ? (
                    <div className="flex-column-center margin-container no-playlist-container1">
                        <div className="no-videos-text">No saved videos.</div>
                        <NavLink
                            className="btn btn-primary no-link-decoration inline-flex-center"
                            to="/videos"
                        >
                            Explore
                        </NavLink>
                    </div>
                ) : (
                    <div className="videos-container">
                        {watchLaterVideos.map((video) => (
                            <VideoCard key={video._id} video={video} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default WatchLater;
