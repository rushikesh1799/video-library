export const isVideoPresentInPlaylist = (playlist, videoId) =>
    playlist.videos.find((video) => video._id === videoId);
