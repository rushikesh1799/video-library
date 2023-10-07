export const isLiked = (likedVideos, videoId) =>
    likedVideos.find((video) => video._id === videoId);
