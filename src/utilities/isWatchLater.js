export const isWatchLater = (watchlaterVideos, videoId) =>
    watchlaterVideos.find((video) => video._id === videoId);
