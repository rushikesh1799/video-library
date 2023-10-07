import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { allPlaylists } from "../../features/user/userSlice";
import { NavLink } from "react-router-dom";

import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import PlaylistVideo from "./PlaylistVideo";

const SinglePlaylist = () => {
    const { playlistId } = useParams();
    const playlists = useSelector(allPlaylists);
    const playlist = playlists.find((playlist) => playlist._id === playlistId);

    return (
        <div className="pagewrapper">
            <Navbar />
            <div className="middle-content">
                <Sidebar />
                <div className="flex-column-start single-playlist-header">
                    <div className="large-font-size playlist-name-weight">
                        <>
                            <SubscriptionsIcon fontSize="small" />
                            {playlist.name}
                        </>
                    </div>
                    <div>{playlist.videos.length} video(s)</div>
                </div>
                {playlist.videos.length === 0 ? (
                    <div className="flex-column-center margin-container no-playlist-container1">
                        <div className="no-videos-text">
                            There are no videos added in this playlist.
                        </div>
                        <NavLink
                            className="btn btn-primary no-link-decoration inline-flex-center"
                            to="/videos"
                        >
                            Explore
                        </NavLink>
                    </div>
                ) : (
                    <div className="videos-container">
                        {playlist.videos.map((video) => (
                            <PlaylistVideo
                                key={video._id}
                                video={video}
                                currentPlaylist={playlist}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SinglePlaylist;
