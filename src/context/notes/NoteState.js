import noteContext from "./NoteContext";

const NoteState = (props) => {
  const state = {
    name: "Abhishek",
    age: "21",
  };
  return (
    <noteContext.Provider value={state}>{props.children}</noteContext.Provider>
  );
};

export default NoteState;
