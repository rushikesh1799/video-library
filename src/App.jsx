import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import Signup from "./features/auth/components/Signup";
import Login from "./features/auth/components/Login";
import Home from "./pages/Home/Home";
import History from "./pages/history/History";
import LikedVideos from "./pages/likedVideos/LikedVideos";
import Playlists from "./pages/playlists/Playlists";
import Explore from "./pages/videoListing/Explore";
import WatchLater from "./pages/watchLater/WatchLater";
import Navbar from "./components/Navbar/Navbar";
import Account from "./pages/Account/Account";
import VideoDetails from "./pages/VideoDetails/VideoDetails";
import {
    getAllHistoryVideos,
    getAllLikedVideos,
    getAllNotes,
    getAllPlaylists,
    getAllWatchLater,
} from "./features/user/userSlice";
import SinglePlaylist from "./pages/playlists/SinglePlaylist";
import MobileNav from "./components/MobileNav/MobileNav";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const dispatch = useDispatch();

    const state = useSelector((state) => state.auth);
    const authToken = useSelector((state) => state.auth.token);

    useEffect(() => {
        console.log(state);
    }, [state]);

    useEffect(() => {
        if (authToken) {
            dispatch(getAllLikedVideos(authToken));
            dispatch(getAllWatchLater(authToken));
            dispatch(getAllPlaylists(authToken));
            dispatch(getAllNotes(authToken));
            dispatch(getAllHistoryVideos(authToken));
        }
    }, [dispatch, authToken]);

    useEffect(() => {
        console.log(state);
    }, [state]);

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/videos" element={<Explore />}></Route>
                <Route
                    path="/videos/:videoId"
                    element={<VideoDetails />}
                ></Route>
                <Route
                    path="/playlists"
                    element={
                        <PrivateRoute>
                            <Playlists />
                        </PrivateRoute>
                    }
                ></Route>
                <Route
                    path="/playlists/:playlistId"
                    element={
                        <PrivateRoute>
                            <SinglePlaylist />
                        </PrivateRoute>
                    }
                ></Route>
                <Route
                    path="/liked"
                    element={
                        <PrivateRoute>
                            <LikedVideos />
                        </PrivateRoute>
                    }
                ></Route>
                <Route
                    path="/history"
                    element={
                        <PrivateRoute>
                            <History />
                        </PrivateRoute>
                    }
                ></Route>
                <Route
                    path="/watchlater"
                    element={
                        <PrivateRoute>
                            <WatchLater />
                        </PrivateRoute>
                    }
                ></Route>
                <Route path="/navbar" element={<Navbar />}></Route>
                <Route
                    path="/account"
                    element={
                        <PrivateRoute>
                            <Account />
                        </PrivateRoute>
                    }
                ></Route>
                <Route path="/profile" element={<MobileNav />}></Route>
            </Routes>
            <ToastContainer />
        </div>
    );
}

export default App;
