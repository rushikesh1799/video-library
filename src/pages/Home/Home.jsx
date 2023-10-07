import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    getAllVideoCategories,
    getAllVideos,
} from "../../features/video/videoSlice";

const Home = () => {
    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getAllVideos());
    //     dispatch(getAllVideoCategories());
    // }, [dispatch]);

    return <div>Home</div>;
};

export default Home;
