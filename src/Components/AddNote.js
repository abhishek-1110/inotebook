import React, { useContext, useState } from "react";
import noteContext from "../context/notes/NoteContext";

<<<<<<< HEAD
const AddNote = () => {
=======
const AddNote = (props) => {
>>>>>>> 0719ca2 (Added to git)
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({title: "", description: "", tag: ""})
  
  const onChange = (e) => {
<<<<<<< HEAD

=======
>>>>>>> 0719ca2 (Added to git)
        // spread 
        setNote({...note, [e.target.name]: e.target.value })
  };

  const handleClick = (e) => {
    // to prevent page from loading
    e.preventDefault();

    // to do handle with alert 
    if (note.title.length <= 3 || note.description.length <= 3 || note.tag.length <= 3) {
<<<<<<< HEAD
      console.log("Pleaase enter full vakye");
      return;
    }
=======
      props.showAlert("Length should be greater than or equal to 3", "danger");
      return;
    }
    props.showAlert(" Note added Successfully", "success")
    setNote(({title: "", description: "", tag: ""}));
>>>>>>> 0719ca2 (Added to git)
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
<<<<<<< HEAD
=======
          value={note.title}
>>>>>>> 0719ca2 (Added to git)
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
<<<<<<< HEAD
=======
          value={note.description}
>>>>>>> 0719ca2 (Added to git)
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
<<<<<<< HEAD
=======
          value={note.tag}
>>>>>>> 0719ca2 (Added to git)
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
