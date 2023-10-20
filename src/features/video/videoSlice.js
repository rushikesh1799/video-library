import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    getAllCategoriesService,
    getAllSearchFilterVideosService,
    getAllVideosService,
    increaseViewCountService,
} from "../../services/videoServices";

export const getAllVideos = createAsyncThunk("video/getAllVideos", async () => {
    try {
        const { data, status } = await getAllVideosService();
        if (status === 200) {
            return data.videos;
        } else {
            console.log("Couldn't get all the videos, Please try again later!");
        }
    } catch (error) {
        console.log(error);
    }
});

export const getAllSearchFilterVideos = createAsyncThunk(
    "video/getAllSearchFilterVideos",
    async (searchText) => {
        try {
            const { data, status } = await getAllSearchFilterVideosService(
                searchText
            );
            if (status === 200) {
                console.log(data.videos);
                return data.videos;
            } else {
                console.log("Couldn't get the videos, Please try again later!");
            }
        } catch (error) {
            console.log(error);
        }
    }
);

export const getAllVideoCategories = createAsyncThunk(
    "video/getAllVideoCategories",
    async () => {
        try {
            const { data, status } = await getAllCategoriesService();
            if (status === 201) {
                return data.categories;
            } else {
                console.log(
                    "Couldn't get all the categories, Please try again later!"
                );
            }
        } catch (error) {
            console.log(error);
        }
    }
);

export const increaseViewCount = createAsyncThunk(
    "video/increaseViewCount",
    async (videoId) => {
        try {
            const { data, status } = await increaseViewCountService(videoId);
            if (status === 200) {
                return data.videos;
            } else {
                console.log(
                    "Couldn't update the view count of the video, Please try again later!"
                );
            }
        } catch (error) {
            console.log(error);
        }
    }
);

export const videoSlice = createSlice({
    name: "video",
    initialState: {
        videos: [],
        categories: [],
        category: "All",
        sortBy: "",
        status: "idle",
        error: null,
    },
    reducers: {
        setCategory(state, action) {
            state.category = action.payload;
        },
        setSortBy(state, action) {
            state.sortBy = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllVideos.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getAllVideos.fulfilled, (state, action) => {
                state.status = "success";
                state.videos = action.payload;
            })
            .addCase(getAllVideos.rejected, (state, action) => {
                state.status = "idle";
                state.error = action.error.message;
            })
            .addCase(getAllVideoCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
            })
            .addCase(getAllSearchFilterVideos.fulfilled, (state, action) => {
                state.videos = action.payload;
            })
            .addCase(increaseViewCount.fulfilled, (state, action) => {
                state.videos = action.payload;
            });
    },
});

export const selectAllVideos = (state) => state.video.videos;

export const { setCategory, setSortBy } = videoSlice.actions;

export default videoSlice.reducer;
