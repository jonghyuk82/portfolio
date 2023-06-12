import "./css/App.css";
import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Home from "./pages/Home";
import Project from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import UseScrollToTop from "./hooks/useScrollToTop";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <AnimatePresence>
        <Router>
          <ScrollToTop />
          <Navbar />
          <motion.nav className="container mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.nav>
          <Footer />
        </Router>
        <UseScrollToTop />
      </AnimatePresence>
    </>
  );
}

export default App;
