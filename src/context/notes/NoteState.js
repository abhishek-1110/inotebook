import { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "63f1eb30378c9d1acb368d0c",
      user: "63edc63cb825ef0eeb4a2f97",
      title: "My second title",
      description: "My second description..",
      tag: "General",
      date: "2023-02-19T09:26:08.559Z",
      __v: 0,
    },
    {
      _id: "63f21a2749e594fc8d938c42",
      user: "63edc63cb825ef0eeb4a2f97",
      title: "My third title",
      description: "My third description..",
      tag: "General",
      date: "2023-02-19T12:46:31.497Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  return (
    <noteContext.Provider value={{notes, setNotes}}>{props.children}</noteContext.Provider>
  );
};

export default NoteState;
