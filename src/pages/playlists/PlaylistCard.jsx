import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { removePlaylist } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import "./Playlists.css";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { useNavigate } from "react-router";

const PlaylistCard = ({ playlist }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authToken = useSelector((state) => state.auth.token);

    const latestAddedVideo = playlist.videos[0];

    return (
        <div
            key={playlist._id}
            className="video-card"
            onClick={() => navigate(`/playlists/${playlist._id}`)}
        >
            <div className="video-img-container">
                <img
                    className="video-thumbnail"
                    src={
                        latestAddedVideo
                            ? `https://i.ytimg.com/vi/${
                                  latestAddedVideo?.videoUrl.split("=")[1]
                              }/0.jpg`
                            : `https://i.ytimg.com/img/no_thumbnail.jpg`
                    }
                    alt={playlist.name}
                />
                <div className="videos-count-container">
                    {playlist.videos.length === 0 ? (
                        <PlaylistAddIcon />
                    ) : (
                        <>
                            <div className="no-link-decoration large-font-size">
                                {playlist.videos.length}
                            </div>
                            <PlaylistAddIcon />
                        </>
                    )}
                </div>
            </div>
            <div className="title-and-options1">
                <span>{playlist.name}</span>
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                        dispatch(
                            removePlaylist({
                                token: authToken,
                                playlistId: playlist._id,
                            })
                        );
                    }}
                >
                    <DeleteIcon sx={{ color: "red" }} />
                </div>
            </div>
        </div>
    );
};

export default PlaylistCard;
