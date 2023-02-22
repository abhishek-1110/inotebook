import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import NoteState from "./context/notes/NoteState";
import Alert from "./Components/Alert";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message = "HEEEY"/>
          <Routes>
          </Routes>
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
