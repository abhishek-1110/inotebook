import React, { useContext, useState } from "react";
import noteContext from "../context/notes/NoteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({title: "", description: "", tag: ""})
  
  const onChange = (e) => {

        // spread 
        setNote({...note, [e.target.name]: e.target.value })
  };

  const handleClick = (e) => {
    // to prevent page from loading
    e.preventDefault();

    // to do handle with alert 
    if (note.title.length <= 3 || note.description.length <= 3 || note.tag.length <= 3) {
      console.log("Pleaase enter full vakye");
      return;
    }
    addNote(note.title, note.description, note.tag);
  };

  return (
    <div className="container my-3">
      <h2>Add a Note</h2>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="description"
          rows="3"
          name="description"
          onChange={onChange}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Tag
        </label>
        <input type = "text"
          className="form-control"
          id="tag"
          name="tag"
          onChange={onChange}
        ></input>
      </div>
      <div className="button">
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          Add Note
        </button>
      </div>
    </div>
  );
};

export default AddNote;
