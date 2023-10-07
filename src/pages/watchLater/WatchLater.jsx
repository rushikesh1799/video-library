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

const WatchLater = () => {
    const dispatch = useDispatch();
    const authToken = useSelector((state) => state.auth.token);
    const watchLaterVideos = useSelector(getAllWatchlaterVideos);

    useEffect(() => {
        dispatch(getAllWatchLater(authToken));
    }, [dispatch]);

    return (
        <div className="pagewrapper">
            <Navbar />
            <div className="middle-content">
                <Sidebar />
                <div className="videos-container">
                    {watchLaterVideos.map((video) => (
                        <VideoCard key={video._id} video={video} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WatchLater;
