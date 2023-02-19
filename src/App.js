import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path = "/Home" element = {<Home/>}></Route>
          <Route exact path="/About" element={<About/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
