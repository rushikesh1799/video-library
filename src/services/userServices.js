import axios from "axios";
import { API_URL } from "../utilities";

export const getAllLikedVideosService = async (token) => {
    return axios.get(`${API_URL}/api/user/likes`, {
        headers: { authorization: token },
    });
};

export const getAllWatchLaterService = async (token) => {
    return axios.get(`${API_URL}/api/user/watchlater`, {
        headers: { authorization: token },
    });
};

// Like/Unlike videos services

export const likeVideoService = async (token, video) => {
    return axios.post(
        `${API_URL}/api/user/likes`,
        {
            video: video,
        },
        { headers: { authorization: token } }
    );
};

export const removeLikedVideoService = async (token, videoId) => {
    return axios.delete(`${API_URL}/api/user/likes/${videoId}`, {
        headers: { authorization: token },
    });
};

// Add to watch / remove from watch later videos services

export const addToWatchLaterService = async (token, video) => {
    return axios.post(
        `${API_URL}/api/user/watchlater`,
        {
            video: video,
        },
        { headers: { authorization: token } }
    );
};

export const removeWatchLaterVideoService = async (token, videoId) => {
    return axios.delete(`${API_URL}/api/user/watchlater/${videoId}`, {
        headers: { authorization: token },
    });
};

export const getAllPlaylistsService = async (token) => {
    return axios.get(`${API_URL}/api/user/playlists`, {
        headers: { authorization: token },
    });
};

// Create a new playlist and delete playlist

export const createNewPlaylistService = async (token, playlist) => {
    return axios.post(
        `${API_URL}/api/user/playlists`,
        {
            playlist: playlist,
        },
        { headers: { authorization: token } }
    );
};

export const removePlaylistService = async (token, playlistId) => {
    return axios.delete(`${API_URL}/api/user/playlists/${playlistId}`, {
        headers: { authorization: token },
    });
};

export const addVideoToPlaylistService = async (token, playlistId, video) => {
    return axios.post(
        `${API_URL}/api/user/playlists/${playlistId}`,
        {
            video: video,
        },
        { headers: { authorization: token } }
    );
};

export const removeVideoFromPlaylistService = async (
    token,
    playlistId,
    videoId
) => {
    return axios.delete(
        `${API_URL}/api/user/playlists/${playlistId}/${videoId}`,
        {
            headers: { authorization: token },
        }
    );
};

// add video to history and remove from history

export const getAllHistoryVideosService = async (token) => {
    return axios.get(`${API_URL}/api/user/history`, {
        headers: { authorization: token },
    });
};

export const addVideoToHistoryService = async (token, video) => {
    return axios.post(
        `${API_URL}/api/user/history`,
        { video: video },
        { headers: { authorization: token } }
    );
};

export const removeVideoFromHistoryService = async (token, videoId) => {
    return axios.delete(`${API_URL}/api/user/history/${videoId}`, {
        headers: { authorization: token },
    });
};

// get and create notes services

export const getAllNotesService = async (token) => {
    return axios.get(`${API_URL}/api/user/notes`, {
        headers: { authorization: token },
    });
};

export const addNoteService = async (token, note) => {
    return axios.post(
        `${API_URL}/api/user/notes`,
        {
            note: note,
        },
        { headers: { authorization: token } }
    );
};

export const removeNoteService = async (token, noteId) => {
    return axios.delete(`${API_URL}/api/user/notes/${noteId}`, {
        headers: { authorization: token },
    });
};

export const updateNoteService = async (token, note, noteId) => {
    return axios.post(
        `${API_URL}/api/user/notes/${noteId}`,
        {
            note: note,
        },
        {
            headers: { authorization: token },
        }
    );
};
