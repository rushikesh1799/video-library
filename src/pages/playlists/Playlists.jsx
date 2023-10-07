import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allPlaylists, getAllPlaylists } from "../../features/user/userSlice";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import PlaylistCard from "./PlaylistCard";

const Playlists = () => {
    const dispatch = useDispatch();
    const authToken = useSelector((state) => state.auth.token);
    const playlists = useSelector(allPlaylists);

    useEffect(() => {
        dispatch(getAllPlaylists(authToken));
    }, [dispatch]);

    return (
        <div className="pagewrapper">
            <Navbar />
            <div className="middle-content">
                <Sidebar />
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
