import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/NoteContext";
import { NoteItem } from "./NoteItem";
import AddNote from "./AddNote";

<<<<<<< HEAD
const Notes = () => {
=======
const Notes = (props) => {
>>>>>>> 0719ca2 (Added to git)
  const context = useContext(noteContext);

  const { notes, getNotes, editNote } = context;

  useEffect(() => {
    getNotes();
  }, []);

  const ref = useRef(null);
  const refClose = useRef();

  const { addNote } = context;

  const [note, setNote] = useState({
    id: "",
    title: "",
    description: "",
    tag: "",
  });

  const onChange = (e) => {
    // spread
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const updateNote = (currentNote) => {
<<<<<<< HEAD
    // to show or hide modal
    ref.current.click();
    setNote({id: currentNote._id, title: currentNote.title, description: currentNote.description, tag: currentNote.tag});
=======
    
    // to show or hide modal
    ref.current.click();
    setNote({
      id: currentNote._id,
      title: currentNote.title,
      description: currentNote.description,
      tag: currentNote.tag,
    });
    props.showAlert("Note Updated", "success");
>>>>>>> 0719ca2 (Added to git)
  };

  const handleClick = (e) => {
    // to prevent page from loading
    e.preventDefault();

    console.log("Updating the note.....");
    editNote(note.id, note.title, note.description, note.tag);
    refClose.current.click();
  };

  return (
    <>
<<<<<<< HEAD
      <AddNote />
=======
      <AddNote showAlert={props.showAlert} />
>>>>>>> 0719ca2 (Added to git)

      <button
        ref={ref}
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={{ display: "none" }}
      >
        Launch demo modal
      </button>
<<<<<<< HEAD

=======
>>>>>>> 0719ca2 (Added to git)
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        useRef={ref}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit your Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={note.title}
                  onChange={onChange}
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="3"
                  name="description"
                  value={note.description}
                  onChange={onChange}
<<<<<<< HEAD
=======
                  minLength={3}
                  required
>>>>>>> 0719ca2 (Added to git)
                ></textarea>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Tag
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="tag"
                  name="tag"
                  value={note.tag}
                  onChange={onChange}
                ></input>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h2>Your Notes</h2>
        {/* To map your notes and display */}
<<<<<<< HEAD
=======
        {/* <div className="container mx-2">
        {notes.length === 0 && "No Notes to Display.. "}
        </div> */}
>>>>>>> 0719ca2 (Added to git)
        {notes.map((note) => {
          return (
            <NoteItem
              key={note._id}
              updateNote={updateNote}
              note={note}
            ></NoteItem>
          );
        })}
      </div>
    </>
  );
};

export default Notes;
