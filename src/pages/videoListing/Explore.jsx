import React from "react";
import { useSelector } from "react-redux";
import { selectAllVideos } from "../../features/video/videoSlice";
import "./explore.css";
import VideoCard from "./VideoCard";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

const Explore = () => {
    const videos = useSelector(selectAllVideos);

    return (
        <div className="pagewrapper">
            <Navbar />
            <div className="middle-content">
                <Sidebar />
                <div className="videos-container">
                    {videos.map((video) => (
                        <VideoCard key={video._id} video={video} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Explore;
