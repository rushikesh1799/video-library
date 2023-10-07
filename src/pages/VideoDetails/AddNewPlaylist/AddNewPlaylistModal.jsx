import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import React, { useState } from "react";

import { TextField } from "@mui/material";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { useDispatch, useSelector } from "react-redux";
import {
    addVideoToPlaylist,
    allPlaylists,
    createNewPlaylist,
    removeVideoFromPlaylist,
} from "../../../features/user/userSlice";
import { isVideoPresentInPlaylist } from "../../../utilities";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    borderRadius: "8px",
    p: 4,
    "@media (max-width: 768px)": {
        width: 300,
    },
};

const AddNewPlaylistModal = ({ currentvideo }) => {
    const dispatch = useDispatch();
    const authToken = useSelector((state) => state.auth.token);
    const playlists = useSelector(allPlaylists);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [newPlaylist, setNewPlaylist] = useState({
        name: "",
        videos: [],
    });

    const condition = newPlaylist.name === "";

    const handleSubmit = () => {
        if (condition) {
            alert("Kindly please give a name to the playlist!");
        } else {
            dispatch(
                createNewPlaylist({ token: authToken, playlist: newPlaylist })
            );
            setNewPlaylist((prev) => ({
                ...prev,
                name: "",
            }));
            handleClose();
        }
    };

    return (
        <div>
            <div className="video_btns" onClick={handleOpen}>
                <PlaylistAddIcon fontSize="medium" />
                <span>Save</span>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        Create New Playlist
                    </Typography>
                    <hr />
                    <Typography
                        id="modal-modal-description"
                        sx={{
                            mt: 2,
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                        }}
                        component="div"
                    >
                        <div className="form_input">
                            <label htmlFor="address1">Playlist Name:</label>
                            <TextField
                                id="outlined-required"
                                label="Name"
                                variant="outlined"
                                required
                                size="small"
                                value={newPlaylist.name}
                                onChange={(e) =>
                                    setNewPlaylist((prev) => ({
                                        ...prev,
                                        name: e.target.value,
                                    }))
                                }
                                sx={{ width: "50%" }}
                            />
                        </div>
                    </Typography>
                    <Typography
                        id="modal-modal-footer"
                        sx={{ mt: 2, display: "flex", gap: "1rem" }}
                        component="div"
                    >
                        <Button
                            variant="outlined"
                            color="error"
                            size="small"
                            onClick={handleClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="outlined"
                            color="success"
                            size="small"
                            onClick={() => {
                                handleSubmit();
                            }}
                        >
                            Add
                        </Button>
                    </Typography>
                    <hr className="divider" />
                    <Typography
                        id="modal-modal-description"
                        sx={{
                            mt: 2,
                            display: "flex",
                            flexDirection: "column",
                            rowGap: "1rem",
                        }}
                        component="div"
                    >
                        <span>Save video to...</span>
                        {playlists.map((playlist) => (
                            <div key={playlist._id} className="playlist-box">
                                <input
                                    className="playlist-input"
                                    type="checkbox"
                                    id={playlist.name}
                                    checked={
                                        isVideoPresentInPlaylist(
                                            playlist,
                                            currentvideo._id
                                        ) || false
                                    }
                                    onChange={() => {
                                        isVideoPresentInPlaylist(
                                            playlist,
                                            currentvideo._id
                                        )
                                            ? dispatch(
                                                  removeVideoFromPlaylist({
                                                      token: authToken,
                                                      playlistId: playlist._id,
                                                      videoId: currentvideo._id,
                                                  })
                                              )
                                            : dispatch(
                                                  addVideoToPlaylist({
                                                      token: authToken,
                                                      playlistId: playlist._id,
                                                      video: currentvideo,
                                                  })
                                              );
                                    }}
                                />
                                <label
                                    htmlFor={playlist.name}
                                    className="playlist-name"
                                >
                                    {playlist.name}
                                </label>
                            </div>
                        ))}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};

export default AddNewPlaylistModal;
