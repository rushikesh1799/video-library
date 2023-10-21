import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import "./video.css";
import { deleteLikedVideo } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Video = ({ video }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authToken = useSelector((state) => state.auth.token);

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
            <div className="title-and-options1">
                <span>{video.title}</span>
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                        dispatch(
                            deleteLikedVideo({
                                token: authToken,
                                videoId: video._id,
                            })
                        );
                    }}
                >
                    <DeleteIcon />
                </div>
            </div>
        </div>
    );
};

export default Video;
