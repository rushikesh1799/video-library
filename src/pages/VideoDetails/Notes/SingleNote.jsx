import React, { useState } from "react";

import EditIcon from "@mui/icons-material/Edit";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { removeNote } from "../../../features/user/userSlice";
import EditNote from "./EditNote";

const SingleNote = ({ note }) => {
    const dispatch = useDispatch();
    const authToken = useSelector((state) => state.auth.token);

    const [editMode, setEditMode] = useState(false);

    const getTime = (note) => {
        const totalSeconds = note.playingTime;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = Math.floor(totalSeconds - minutes * 60);
        return `${minutes} : ${seconds}`;
    };

    return (
        <>
            {!editMode && (
                <div className="added-note">
                    <h1>{note.title}</h1>
                    <p className="note-description">{note.description}</p>
                    <div className="note-timeframe">
                        <AccessTimeFilledIcon fontSize="small" />
                        <span>{getTime(note)}</span>
                    </div>
                    <div className="flex-row-justify-start">
                        <button
                            className="btn-no-decoration"
                            onClick={() => setEditMode(true)}
                        >
                            <EditIcon
                                sx={{
                                    color: "#444444",
                                }}
                            />
                        </button>
                        <button
                            className="btn-no-decoration"
                            onClick={() =>
                                dispatch(
                                    removeNote({
                                        token: authToken,
                                        noteId: note._id,
                                    })
                                )
                            }
                        >
                            <DeleteIcon sx={{ color: "red" }} />
                        </button>
                    </div>
                </div>
            )}
            {editMode && (
                <EditNote
                    editMode={editMode}
                    setEditMode={setEditMode}
                    note={note}
                />
            )}
        </>
    );
};

export default SingleNote;
