import './App.css';
import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Sertifikat from "./components/Sertifikat";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
    <Navbar />
    <About />
    <Skills />
    <Sertifikat />
    <Footer />
  </main>
  );
}

export default App;
