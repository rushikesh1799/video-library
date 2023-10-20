import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    allLikedVideos,
    getAllLikedVideos,
} from "../../features/user/userSlice";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Video from "../../components/VideoCard/Video";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { NavLink } from "react-router-dom";

const LikedVideos = () => {
    const likedVideos = useSelector(allLikedVideos);

    // useEffect(() => {
    //     dispatch(getAllLikedVideos(authToken));
    // }, [dispatch]);

    return (
        <div className="pagewrapper">
            <Navbar />
            <div className="middle-content">
                <Sidebar />
                <div className="flex-column-start single-playlist-header">
                    <div className="large-font-size playlist-name-weight">
                        <>
                            <ThumbUpIcon fontSize="small" />
                            Liked Videos
                        </>
                    </div>
                    <div>{likedVideos.length} video(s)</div>
                </div>
                <hr />
                {likedVideos.length === 0 ? (
                    <div className="flex-column-center margin-container no-playlist-container1">
                        <div className="no-videos-text">No liked videos.</div>
                        <NavLink
                            className="btn btn-primary no-link-decoration inline-flex-center"
                            to="/videos"
                        >
                            Explore
                        </NavLink>
                    </div>
                ) : (
                    <div className="videos-container">
                        {likedVideos?.map((video) => (
                            <Video key={video._id} video={video} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default LikedVideos;
