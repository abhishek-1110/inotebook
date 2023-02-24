import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import NoteState from "./context/notes/NoteState";
import Alert from "./Components/Alert";
<<<<<<< HEAD

function App() {
=======
import { useState } from "react";

function App() {
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
>>>>>>> 0719ca2 (Added to git)
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
<<<<<<< HEAD
          <Alert message = "HEEEY"/>
          <Routes>
          </Routes>
=======
>>>>>>> 0719ca2 (Added to git)
          <div className="container">
            <Routes>
              <Route exact path="/Home" element={<Home />}></Route>
              <Route exact path="/About" element={<About />}></Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
