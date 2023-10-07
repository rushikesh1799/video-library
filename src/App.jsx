import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import Signup from "./features/auth/components/Signup";
import Login from "./features/auth/components/Login";
import { NavLink } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import History from "./pages/history/History";
import LikedVideos from "./pages/likedVideos/LikedVideos";
import Playlists from "./pages/playlists/Playlists";
import Explore from "./pages/videoListing/Explore";
import WatchLater from "./pages/watchLater/WatchLater";
import Navbar from "./components/Navbar/Navbar";
import Account from "./pages/Account/Account";
import VideoDetails from "./pages/VideoDetails/VideoDetails";
import {
    getAllLikedVideos,
    getAllNotes,
    getAllPlaylists,
    getAllWatchLater,
} from "./features/user/userSlice";
import { getAllWatchLaterService } from "./services/userServices";
import SinglePlaylist from "./pages/playlists/SinglePlaylist";

function App() {
    const dispatch = useDispatch();

    const state = useSelector((state) => state.user);
    const authToken = useSelector((state) => state.auth.token);

    useEffect(() => {
        dispatch(getAllLikedVideos(authToken));
        dispatch(getAllWatchLater(authToken));
        dispatch(getAllPlaylists(authToken));
        dispatch(getAllNotes(authToken));
    }, [dispatch]);

    useEffect(() => {
        console.log(state);
    }, [state]);

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/videos" element={<Explore />}></Route>
                <Route
                    path="/videos/:videoId"
                    element={<VideoDetails />}
                ></Route>
                <Route path="/playlists" element={<Playlists />}></Route>
                <Route
                    path="/playlists/:playlistId"
                    element={<SinglePlaylist />}
                ></Route>
                <Route path="/liked" element={<LikedVideos />}></Route>
                <Route path="/history" element={<History />}></Route>
                <Route path="/watchlater" element={<WatchLater />}></Route>
                <Route path="/navbar" element={<Navbar />}></Route>
                <Route path="/account" element={<Account />}></Route>
            </Routes>
        </>
    );
}

export default App;
