import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
    <Navbar />
    <About />
    <Skills />
    <Contact />
    <Footer />
  </main>
  );
}

export default App;
