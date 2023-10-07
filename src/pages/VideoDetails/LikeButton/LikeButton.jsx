import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLiked } from "../../../utilities";
import { deleteLikedVideo, likeVideo } from "../../../features/user/userSlice";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";

const LikeButton = ({ likedVideos, videoToRender }) => {
    const dispatch = useDispatch();
    const authToken = useSelector((state) => state.auth.token);

    return (
        <>
            {isLiked(likedVideos, videoToRender._id) ? (
                <div
                    className="video_btns"
                    onClick={() =>
                        dispatch(
                            deleteLikedVideo({
                                token: authToken,
                                videoId: videoToRender._id,
                            })
                        )
                    }
                >
                    <ThumbUpIcon fontSize="small" sx={{ color: "#ff3b01" }} />
                    <span>Liked</span>
                </div>
            ) : (
                <div
                    className="video_btns"
                    onClick={() =>
                        dispatch(
                            likeVideo({
                                token: authToken,
                                video: videoToRender,
                            })
                        )
                    }
                >
                    <ThumbUpOutlinedIcon fontSize="small" />
                    <span>Like</span>
                </div>
            )}
        </>
    );
};

export default LikeButton;
