import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    allLikedVideos,
    getAllLikedVideos,
} from "../../features/user/userSlice";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Video from "../../components/VideoCard/Video";

const LikedVideos = () => {
    const dispatch = useDispatch();
    const authToken = useSelector((state) => state.auth.token);
    const likedVideos = useSelector(allLikedVideos);

    // useEffect(() => {
    //     dispatch(getAllLikedVideos(authToken));
    // }, [dispatch]);

    return (
        <div className="pagewrapper">
            <Navbar />
            <div className="middle-content">
                <Sidebar />
                <div className="videos-container">
                    {likedVideos.map((video) => (
                        <Video key={video._id} video={video} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LikedVideos;
