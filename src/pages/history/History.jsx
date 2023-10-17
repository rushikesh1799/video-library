import React, { useEffect } from "react";
import {
    allHistoryVideos,
    getAllHistoryVideos,
} from "../../features/user/userSlice";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

import HistoryIcon from "@mui/icons-material/History";
import HistoryVideo from "./HistoryVideo";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const History = () => {
    const dispatch = useDispatch();
    const authToken = useSelector((state) => state.auth.token);
    const historyVideos = useSelector(allHistoryVideos);

    // useEffect(() => {
    //     dispatch(getAllHistoryVideos(authToken));
    // }, [dispatch]);

    return (
        <div className="pagewrapper">
            <Navbar />
            <div className="middle-content">
                <Sidebar />
                <div className="flex-column-start single-playlist-header">
                    <div className="large-font-size playlist-name-weight">
                        <>
                            <HistoryIcon fontSize="small" />
                            History
                        </>
                    </div>
                    <div>{historyVideos.length} video(s)</div>
                </div>
                {historyVideos.length === 0 ? (
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
                        {historyVideos.map((video) => (
                            <HistoryVideo key={video._id} video={video} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default History;
