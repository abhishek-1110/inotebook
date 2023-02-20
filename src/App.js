import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import NoteState from "./context/notes/NoteState";
function App() {
  return (
    <>
      <NoteState>
        <Router>
          <div className="App">
            <Navbar />
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
