import { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "63f1eb30378c9d1acb368d0c",
      user: "63edc63cb825ef0eeb4a2f97",
      title: "My 1 title",
      description: "My 1 description..",
      tag: "General",
      date: "2023-02-19T09:26:08.559Z",
      __v: 0,
    },
    {
      _id: "63f21a2749e594fc8d938c432",
      user: "63edc63cb825ef0eeb4a2f97",
      title: "My 2 title",
      description: "My 2 description..",
      tag: "General",
      date: "2023-02-19T12:46:31.497Z",
      __v: 0,
    },
    {
      _id: "63f21a2749e594fc8d938c442",
      user: "63edc63cb825ef0eeb4a2f97",
      title: "My 3 title",
      description: "My 3 description..",
      tag: "General",
      date: "2023-02-19T12:46:31.497Z",
      __v: 0,
    },
    {
      _id: "63f21a2749e594fc8d938c452",
      user: "63edc63cb825ef0eeb4a2f97",
      title: "My 4 title",
      description: "My 4 description..",
      tag: "General",
      date: "2023-02-19T12:46:31.497Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  // add a note
  const addNote = (title, description, tag) => {
    // to do api call
    console.log("Adding a new Note");

    const note = {
      _id: "63f1eb30378c9d1acb368d0c",
      user: "63edc63cb825ef0eeb4a2f97",
      title: title,
      description: description,
      tag: tag,
      date: "2023-02-19T09:26:08.559Z",
      __v: 0,
    };
    // concat
    setNotes(notes.concat(note));
  };

  // delete a note
  const deleteNote = (id) => {
    console.log("Deleteing note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // edit a note
  const editNote = (id, title, description, tag) => {



  };

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
