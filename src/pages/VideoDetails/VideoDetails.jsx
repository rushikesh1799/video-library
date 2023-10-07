import React, { useRef } from "react";
import { useParams } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
    increaseViewCount,
    selectAllVideos,
} from "../../features/video/videoSlice";
import VideoCard from "../videoListing/VideoCard";
import "./videodetails.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import ShareIcon from "@mui/icons-material/Share";
import {
    addVideoToHistory,
    allLikedVideos,
    allNotes,
    getAllWatchlaterVideos,
} from "../../features/user/userSlice";
import WatchlaterIcon from "./WatchlaterIcon/WatchlaterIcon";
import LikeButton from "./LikeButton/LikeButton";
import AddNewPlaylistModal from "./AddNewPlaylist/AddNewPlaylistModal";
import ReactPlayer from "react-player/youtube";
import { CircularProgress } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import DeleteIcon from "@mui/icons-material/Delete";
import SingleNote from "./Notes/SingleNote";
import EditNote from "./Notes/EditNote";

const VideoDetails = () => {
    const { videoId } = useParams();
    const videos = useSelector(selectAllVideos);
    const likedVideos = useSelector(allLikedVideos);
    const watchlatervideos = useSelector(getAllWatchlaterVideos);
    const notes = useSelector(allNotes);
    const authToken = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();
    const videoRef = useRef();

    const copyHandler = () => {
        navigator.clipboard.writeText(window.location.href);
        // toast.info("Link Copied");
        console.log("Link Copied");
    };

    const videoToRender = videos?.find((video) => video._id === videoId);
    const videoNotes = notes.filter((note) => note.videoId === videoId);
    return (
        <div className="pagewrapper">
            <Navbar />
            <div className="middle-content">
                <Sidebar />
                <div className="flex-row-justify-space-around margin-container video-and-notes">
                    {videoToRender ? (
                        <div className="videos-content flex-column">
                            <div className="single-video-container">
                                <ReactPlayer
                                    url={videoToRender.videoUrl}
                                    controls
                                    width="100%"
                                    height="100%"
                                    onStart={() => {
                                        console.log("viewcount");
                                        if (authToken) {
                                            dispatch(
                                                addVideoToHistory({
                                                    token: authToken,
                                                    video: videoToRender,
                                                })
                                            );
                                            dispatch(
                                                increaseViewCount(
                                                    videoToRender._id
                                                )
                                            );
                                        }
                                    }}
                                    ref={videoRef}
                                    config={{
                                        youtube: {
                                            playerVars: {
                                                origin: window.location.origin,
                                                enablejsapi: 1,
                                            },
                                        },
                                    }}
                                />
                            </div>
                            <div className="video-details">
                                <div className="keyword hashtag">
                                    #{videoToRender.category}
                                </div>
                                <div className="video-single-title">
                                    {videoToRender.title}
                                </div>
                                <div className="views">
                                    Views : {videoToRender.viewCount}
                                </div>
                                <div className="video_btns_container">
                                    <div>
                                        <LikeButton
                                            likedVideos={likedVideos}
                                            videoToRender={videoToRender}
                                        />
                                    </div>
                                    <div>
                                        <WatchlaterIcon
                                            watchlatervideos={watchlatervideos}
                                            videoToRender={videoToRender}
                                        />
                                    </div>
                                    <AddNewPlaylistModal
                                        currentvideo={videoToRender}
                                    />
                                    <div
                                        className="video_btns"
                                        onClick={copyHandler}
                                    >
                                        <ShareIcon fontSize="small" />{" "}
                                        <span>Copy Link</span>
                                    </div>
                                </div>
                                <hr className="section-line" />
                                <div className="video-description">
                                    {videoToRender.description}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <CircularProgress style={{ color: "#ff3b01" }} />
                    )}
                    <div className="add-note-container">
                        <h1>Notes</h1>
                        <EditNote
                            videoRef={videoRef}
                            currentvideo={videoToRender}
                        />
                        <div className="added-notes-container">
                            {videoNotes.length === 0 ? (
                                <p>No notes added yet.</p>
                            ) : (
                                <>
                                    {videoNotes.map((note) => (
                                        <SingleNote
                                            note={note}
                                            key={note._id}
                                        />
                                    ))}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoDetails;
