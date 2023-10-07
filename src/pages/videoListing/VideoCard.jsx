import React from "react";
import "./explore.css";
import { useNavigate } from "react-router";

const VideoCard = ({ video }) => {
    const navigate = useNavigate();

    return (
        <div
            key={video._id}
            className="video-card"
            onClick={() => navigate(`/videos/${video._id}`)}
        >
            <div className="video-img-container">
                <img
                    className="video-thumbnail"
                    src={`https://i.ytimg.com/vi/${
                        video?.videoUrl.split("=")[1]
                    }/0.jpg`}
                    alt={video.title}
                />
            </div>
            <div className="title-and-options">
                <span>{video.title}</span>
            </div>
            <div className="video-category">{video.category}</div>
        </div>
    );
};

export default VideoCard;
