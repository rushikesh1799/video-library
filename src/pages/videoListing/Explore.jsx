import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectAllVideos,
    setCategory,
    setSortBy,
} from "../../features/video/videoSlice";
import "./explore.css";
import VideoCard from "./VideoCard";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

const Explore = () => {
    const dispatch = useDispatch();
    const videos = useSelector(selectAllVideos);

    const { category, categories, sortBy } = useSelector(
        (state) => state.video
    );

    const filteredVideos =
        category === "All"
            ? videos
            : videos.filter((video) => video.category === category);

    const sortedVideos =
        sortBy === "latest"
            ? [...filteredVideos].sort(
                  (a, b) =>
                      new Date(b.uploadDate).getTime() -
                      new Date(a.uploadDate).getTime()
              )
            : filteredVideos;

    return (
        <div className="pagewrapper">
            <Navbar />
            <div className="middle-content">
                <Sidebar />
                <>
                    <div className="margin-container flex-column-start">
                        <button
                            className="explore-btn btn-link btn-link-primary btn-fit-content1 text-white"
                            onClick={() => dispatch(setSortBy("latest"))}
                        >
                            Sort By Latest
                        </button>
                    </div>
                    <div className="categories">
                        <span
                            className={`${
                                category === "All" ? "active-category" : null
                            } chip category-chip`}
                            onClick={() => dispatch(setCategory("All"))}
                        >
                            All
                        </span>
                        {categories.map((currentCategory) => (
                            <span
                                className={`${
                                    currentCategory.title === category
                                        ? "active-category"
                                        : null
                                } chip category-chip`}
                                key={currentCategory._id}
                                onClick={() =>
                                    dispatch(setCategory(currentCategory.title))
                                }
                            >
                                {currentCategory.title}
                            </span>
                        ))}
                    </div>
                </>
                <div className="videos-container">
                    {category === "All" ? (
                        <>
                            {sortedVideos.map((video) => (
                                <VideoCard key={video._id} video={video} />
                            ))}
                        </>
                    ) : (
                        <>
                            {sortedVideos.map((video) => (
                                <VideoCard key={video._id} video={video} />
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Explore;
