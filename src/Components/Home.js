import Notes from "./Notes";
<<<<<<< HEAD

const Home = () => {
  return (
    <>

      <Notes></Notes>
=======
import Alert from "./Alert";
import { useState } from "react";
import NoteState from "../context/notes/NoteState";

const Home = () => {
  const [alert, setAlert] = useState();

  const showAlertMessage = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <Alert message={alert} />
      <Notes showAlert={showAlertMessage}></Notes>
>>>>>>> 0719ca2 (Added to git)
    </>
  );
};

export default Home;
