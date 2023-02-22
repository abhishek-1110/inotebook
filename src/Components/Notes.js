import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import { NoteItem } from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(noteContext);

  const { notes, addNote } = context;

  return (
    <>
      <AddNote></AddNote>
      <div className="row my-3">
        <h2>Your Notes</h2>
        {/* To map your notes and display */}
        {notes.map((note) => {
          return <NoteItem key={note._id} note={note}></NoteItem>;
        })}
      </div>
    </>
  );
};

export default Notes;