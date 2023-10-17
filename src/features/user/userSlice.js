import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    addNoteService,
    addToWatchLaterService,
    addVideoToHistoryService,
    addVideoToPlaylistService,
    createNewPlaylistService,
    getAllHistoryVideosService,
    getAllLikedVideosService,
    getAllNotesService,
    getAllPlaylistsService,
    getAllWatchLaterService,
    likeVideoService,
    removeLikedVideoService,
    removeNoteService,
    removePlaylistService,
    removeVideoFromHistoryService,
    removeVideoFromPlaylistService,
    removeWatchLaterVideoService,
    updateNoteService,
} from "../../services/userServices";

export const getAllLikedVideos = createAsyncThunk(
    "video/getAllLikedVideos",
    async (token) => {
        try {
            const { data, status } = await getAllLikedVideosService(token);
            if (status === 200) {
                return data.likes;
            } else {
                console.log(
                    "Couldn't get all the liked videos, Please try again later!"
                );
            }
        } catch (error) {
            // console.log(error);
        }
    }
);

export const getAllPlaylists = createAsyncThunk(
    "video/getAllPlaylists",
    async (token) => {
        try {
            const { data, status } = await getAllPlaylistsService(token);
            if (status === 200) {
                return data.playlists;
            } else {
                console.log(
                    "Couldn't get all the playlists data, Please try again later!"
                );
            }
        } catch (error) {
            console.log(error);
        }
    }
);

export const getAllWatchLater = createAsyncThunk(
    "video/getAllWatchLater",
    async (token) => {
        try {
            const { data, status } = await getAllWatchLaterService(token);
            if (status === 200) {
                return data.watchlater;
            } else {
                console.log(
                    "Couldn't get all the watch later videos data, Please try again later!"
                );
            }
        } catch (error) {
            console.log(error);
        }
    }
);

export const likeVideo = createAsyncThunk(
    "video/likeVideo",
    async ({ token, video }) => {
        try {
            const { data, status } = await likeVideoService(token, video);
            if (status === 200) {
                return data.likes;
            } else {
                console.log(
                    "Couldn't get the liked videos, Please try again later!"
                );
            }
        } catch (error) {
            console.log(error);
        }
    }
);

export const deleteLikedVideo = createAsyncThunk(
    "video/deleteLikedVideo",
    async ({ token, videoId }) => {
        try {
            const { data, status } = await removeLikedVideoService(
                token,
                videoId
            );
            if (status === 200) {
                return data.likes;
            } else {
                console.log(
                    "Couldn't delete the video from likes, Please try again later!"
                );
            }
        } catch (error) {
            console.log(error);
        }
    }
);

export const addToWatchLater = createAsyncThunk(
    "video/addToWatchLater",
    async ({ token, video }) => {
        try {
            const { data, status } = await addToWatchLaterService(token, video);
            if (status === 200) {
                return data.watchlater;
            } else {
                console.log(
                    "Couldn't get the watch later videos, Please try again later!"
                );
            }
        } catch (error) {
            console.log(error);
        }
    }
);

export const removeWatchLater = createAsyncThunk(
    "video/removeWatchLater",
    async ({ token, videoId }) => {
        try {
            const { data, status } = await removeWatchLaterVideoService(
                token,
                videoId
            );
            if (status === 200) {
                return data.watchlater;
            } else {
                console.log(
                    "Couldn't delete the video from watch later, Please try again later!"
                );
            }
        } catch (error) {
            console.log(error);
        }
    }
);

export const createNewPlaylist = createAsyncThunk(
    "video/createNewPlaylist",
    async ({ token, playlist }) => {
        try {
            const { data, status } = await createNewPlaylistService(
                token,
                playlist
            );
            if (status === 200) {
                return data.playlists;
            } else {
                console.log(
                    "Couldn't create the playlist, Please try again later!"
                );
            }
        } catch (error) {
            console.log(error);
        }
    }
);

export const removePlaylist = createAsyncThunk(
    "video/removePlaylist",
    async ({ token, playlistId }) => {
        try {
            const { data, status } = await removePlaylistService(
                token,
                playlistId
            );
            if (status === 200) {
                return data.playlists;
            } else {
                console.log(
                    "Couldn't delete the playlist, Please try again later!"
                );
            }
        } catch (error) {
            console.log(error);
        }
    }
);

export const addVideoToPlaylist = createAsyncThunk(
    "video/addVideoToPlaylist",
    async ({ token, playlistId, video }) => {
        try {
            const { data, status } = await addVideoToPlaylistService(
                token,
                playlistId,
                video
            );
            if (status === 200) {
                return data.playlists;
            } else {
                console.log(
                    "Couldn't add the video to the playlist, Please try again later!"
                );
            }
        } catch (error) {
            console.log(error);
        }
    }
);

export const removeVideoFromPlaylist = createAsyncThunk(
    "video/removeVideoFromPlaylist",
    async ({ token, playlistId, videoId }) => {
        try {
            const { data, status } = await removeVideoFromPlaylistService(
                token,
                playlistId,
                videoId
            );
            if (status === 200) {
                return data.playlists;
            } else {
                console.log(
                    "Couldn't delete the video from Playlist, Please try again later!"
                );
            }
        } catch (error) {
            console.log(error);
        }
    }
);

export const getAllHistoryVideos = createAsyncThunk(
    "video/getAllHistoryVideos",
    async (token) => {
        try {
            const { data, status } = await getAllHistoryVideosService(token);
            if (status === 200) {
                return data.history;
            } else {
                console.log(
                    "Couldn't get all the history videos, Please try again later!"
                );
            }
        } catch (error) {
            console.log(error);
        }
    }
);

export const addVideoToHistory = createAsyncThunk(
    "video/addVideoToHistory",
    async ({ token, video }) => {
        try {
            const { data, status } = await addVideoToHistoryService(
                token,
                video
            );
            if (status === 200) {
                return data.history;
            } else {
                console.log(
                    "Couldn't add the video to the history, Please try again later!"
                );
            }
        } catch (error) {
            console.log(error);
        }
    }
);

export const removeVideoFromHistory = createAsyncThunk(
    "video/removeVideoFromHistory",
    async ({ token, videoId }) => {
        try {
            const { data, status } = await removeVideoFromHistoryService(
                token,
                videoId
            );
            if (status === 200) {
                return data.history;
            } else {
                console.log(
                    "Couldn't delete the video from history, Please try again later!"
                );
            }
        } catch (error) {
            console.log(error);
        }
    }
);

export const getAllNotes = createAsyncThunk(
    "video/getAllNotes",
    async (token) => {
        try {
            const { data, status } = await getAllNotesService(token);
            if (status === 200) {
                return data.notes;
            } else {
                console.log(
                    "Couldn't get all the notes, Please try again later!"
                );
            }
        } catch (error) {
            console.log(error);
        }
    }
);

export const addNote = createAsyncThunk(
    "video/addNote",
    async ({ token, note }) => {
        try {
            const { data, status } = await addNoteService(token, note);
            if (status === 200) {
                return data.notes;
            } else {
                console.log(
                    "Couldn't add the note to the video, Please try again later!"
                );
            }
        } catch (error) {
            console.log(error);
        }
    }
);

export const removeNote = createAsyncThunk(
    "video/removeNote",
    async ({ token, noteId }) => {
        try {
            const { data, status } = await removeNoteService(token, noteId);
            if (status === 200) {
                return data.notes;
            } else {
                console.log(
                    "Couldn't delete the note, Please try again later!"
                );
            }
        } catch (error) {
            console.log(error);
        }
    }
);

export const updateNote = createAsyncThunk(
    "video/updateNote",
    async ({ token, note, noteId }) => {
        try {
            const { data, status } = await updateNoteService(
                token,
                note,
                noteId
            );
            if (status === 200) {
                return data.notes;
            } else {
                console.log(
                    "Could not update the note, please try again later!"
                );
            }
        } catch (error) {
            console.log(error);
        }
    }
);

export const userSlice = createSlice({
    name: "user",
    initialState: {
        likes: [],
        history: [],
        playlists: [],
        watchlater: [],
        notes: [],
        loading: false,
        status: "idle",
    },
    reducers: {
        setInitialUserData(state, action) {
            state.likes = action.payload.likes;
            state.history = action.payload.history;
            state.playlists = action.payload.playlists;
            state.watchlater = action.payload.watchlater;
            state.notes = action.payload.notes;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllLikedVideos.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getAllLikedVideos.fulfilled, (state, action) => {
                state.status = "success";
                state.likes = action.payload;
            })
            .addCase(getAllLikedVideos.rejected, (state, action) => {
                state.status = "idle";
                state.error = action.error.message;
            })
            .addCase(getAllPlaylists.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getAllPlaylists.fulfilled, (state, action) => {
                state.status = "success";
                state.playlists = action.payload;
            })
            .addCase(getAllPlaylists.rejected, (state, action) => {
                state.status = "idle";
                state.error = action.error.message;
            })
            .addCase(getAllWatchLater.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getAllWatchLater.fulfilled, (state, action) => {
                state.status = "success";
                state.watchlater = action.payload;
            })
            .addCase(getAllWatchLater.rejected, (state, action) => {
                state.status = "idle";
                state.error = action.error.message;
            })
            .addCase(likeVideo.fulfilled, (state, action) => {
                state.status = "success";
                state.likes = action.payload;
            })
            .addCase(deleteLikedVideo.fulfilled, (state, action) => {
                state.likes = action.payload;
            })
            .addCase(addToWatchLater.fulfilled, (state, action) => {
                state.status = "success";
                state.watchlater = action.payload;
            })
            .addCase(removeWatchLater.fulfilled, (state, action) => {
                state.watchlater = action.payload;
            })
            .addCase(createNewPlaylist.fulfilled, (state, action) => {
                state.playlists = action.payload;
            })
            .addCase(removePlaylist.fulfilled, (state, action) => {
                state.playlists = action.payload;
            })
            .addCase(addVideoToPlaylist.fulfilled, (state, action) => {
                state.playlists = action.payload;
            })
            .addCase(removeVideoFromPlaylist.fulfilled, (state, action) => {
                state.playlists = action.payload;
            })
            .addCase(getAllHistoryVideos.fulfilled, (state, action) => {
                state.history = action.payload;
            })
            .addCase(addVideoToHistory.fulfilled, (state, action) => {
                state.history = action.payload;
            })
            .addCase(removeVideoFromHistory.fulfilled, (state, action) => {
                state.history = action.payload;
            })
            .addCase(getAllNotes.fulfilled, (state, action) => {
                state.notes = action.payload;
            })
            .addCase(addNote.fulfilled, (state, action) => {
                state.notes = action.payload;
            })
            .addCase(removeNote.fulfilled, (state, action) => {
                state.notes = action.payload;
            })
            .addCase(updateNote.fulfilled, (state, action) => {
                state.notes = action.payload;
            });
    },
});

export const { setInitialUserData } = userSlice.actions;

export const getAllWatchlaterVideos = (state) => state.user.watchlater;
export const allLikedVideos = (state) => state.user.likes;
export const allPlaylists = (state) => state.user.playlists;
export const allHistoryVideos = (state) => state.user.history;
export const allNotes = (state) => state.user.notes;
export const userState = (state) => state.user;

export default userSlice.reducer;
