import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, updateNote } from "../../../features/user/userSlice";
import { useNavigate } from "react-router";
import { ReactToastify } from "../../../utilities/ReactTostify";

const EditNote = ({ videoRef, currentvideo, editMode, setEditMode, note }) => {
    const dispatch = useDispatch();
    const authToken = useSelector((state) => state.auth.token);
    const navigate = useNavigate();

    const [noteTitle, setNoteTitle] = useState(() =>
        editMode ? note.title : ""
    );
    const [noteDescription, setNoteDescription] = useState(
        editMode ? note.description : ""
    );

    const onDiscardHandler = () => {
        if (editMode) {
            setEditMode(false);
        } else {
            setNoteTitle("");
            setNoteDescription("");
        }
    };

    const updateNoteHandler = (e) => {
        e.preventDefault();
        if (authToken) {
            const updatedNote = {
                ...note,
                title: noteTitle,
                description: noteDescription,
            };
            dispatch(
                updateNote({
                    token: authToken,
                    note: updatedNote,
                    noteId: note._id,
                })
            );
            setEditMode(false);
        } else {
            console.log("please login first!");
        }
    };

    const addNoteHandler = (e) => {
        e.preventDefault();
        if (authToken) {
            const newNote = {
                title: noteTitle,
                description: noteDescription,
                playingTime: videoRef.current.getCurrentTime(),
                videoId: currentvideo._id,
            };

            dispatch(addNote({ token: authToken, note: newNote }));
            setNoteTitle("");
            setNoteDescription("");
        } else {
            navigate("/login");
            ReactToastify("please login first to add note!", "info");
        }
    };

    const disableSave = noteTitle === "" || noteDescription === "";
    return (
        <div className="edit-form">
            <div>
                <input
                    placeholder="Title.."
                    className="input-primary input-full-width"
                    value={noteTitle}
                    onChange={(e) => setNoteTitle(e.target.value)}
                />
            </div>
            <div>
                <textarea
                    placeholder="Description.."
                    className="input-primary input-full-width input-height-6"
                    value={noteDescription}
                    onChange={(e) => setNoteDescription(e.target.value)}
                />
            </div>
            <div className="flex-row-justify-start add-note-btns">
                <button
                    type="submit"
                    className="btn btn-primary btn-fit-content"
                    disabled={disableSave}
                    onClick={(e) =>
                        editMode ? updateNoteHandler(e) : addNoteHandler(e)
                    }
                >
                    Save
                </button>
                <button
                    type="button"
                    className="btn btn-outline-primary btn-fit-content"
                    onClick={onDiscardHandler}
                >
                    Discard
                </button>
            </div>
        </div>
    );
};

export default EditNote;
