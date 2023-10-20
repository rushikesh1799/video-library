import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allPlaylists, getAllPlaylists } from "../../features/user/userSlice";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import PlaylistCard from "./PlaylistCard";

import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const Playlists = () => {
    const dispatch = useDispatch();
    const authToken = useSelector((state) => state.auth.token);
    const playlists = useSelector(allPlaylists);

    // useEffect(() => {
    //     dispatch(getAllPlaylists(authToken));
    // }, [dispatch]);

    return (
        <div className="pagewrapper">
            <Navbar />
            <div className="middle-content">
                <Sidebar />
                <div className="flex-column-start single-playlist-header">
                    <div className="large-font-size playlist-name-weight">
                        <>
                            {/* <PlaylistAddIcon fontSize="small" /> */}
                            {playlists.length} Playlist (s)
                        </>
                    </div>
                </div>
                <hr />
                <div className="videos-container">
                    {playlists.map((playlist) => (
                        <PlaylistCard key={playlist._id} playlist={playlist} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Playlists;
