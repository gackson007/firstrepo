import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Event from "./pages/Event";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={Home} />
        <Route exact path="/menu" element={Menu} />
        <Route exact path="/event" element={Event} />
        <Route exact path="/about" element={About} />
        <Route exact path="/contact" element={Contact} />
      </Routes>
    </Router>
  );
}

export default App;
