import React, { useContext, useState } from "react";
import noteContext from "../context/notes/NoteContext";

const Home = () => {
  const context = useContext(noteContext);

  const { notes, setNotes } = context;

  return (
    <>
      <div className="container my-3">
        <h2>Add a Note</h2>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="button">
          <button type="button" class="btn btn-primary">
            Primary
          </button>
        </div>
      </div>
      <div className="container my-3">
        <h2>Your Notes</h2>
        {/* To map your notes and display */}
        {notes.map((note) => {
          return note.title;
        })}
      </div>
    </>
  );
};

export default Home;