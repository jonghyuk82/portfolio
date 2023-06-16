import "./css/App.css";
import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Project from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import UseScrollToTop from "./hooks/useScrollToTop";
import Footer from "./components/Footer";
import { AppProvider } from "./context/AppContext";
import { GithubProvier } from "./context/GithubContext";

function App() {
  return (
    <>
      <AppProvider>
        <GithubProvier>
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
            <ToastContainer autoClose={2000} />
          </AnimatePresence>
        </GithubProvier>
      </AppProvider>
    </>
  );
}

export default App;
