import React from "react";
import {
    addToWatchLater,
    removeWatchLater,
} from "../../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

import WatchLaterIcon from "@mui/icons-material/WatchLater";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import { isWatchLater } from "../../../utilities";

const WatchlaterIcon = ({ watchlatervideos, videoToRender }) => {
    const dispatch = useDispatch();
    const authToken = useSelector((state) => state.auth.token);

    return (
        <>
            {isWatchLater(watchlatervideos, videoToRender._id) ? (
                <div
                    className="video_btns"
                    onClick={() =>
                        dispatch(
                            removeWatchLater({
                                token: authToken,
                                videoId: videoToRender._id,
                            })
                        )
                    }
                >
                    <WatchLaterIcon
                        fontSize="small"
                        sx={{ color: "#ff3b01" }}
                    />
                    <span>Watch Later</span>
                </div>
            ) : (
                <div
                    className="video_btns"
                    onClick={() =>
                        dispatch(
                            addToWatchLater({
                                token: authToken,
                                video: videoToRender,
                            })
                        )
                    }
                >
                    <WatchLaterOutlinedIcon fontSize="small" />{" "}
                    <span>Watch Later</span>
                </div>
            )}
        </>
    );
};

export default WatchlaterIcon;
