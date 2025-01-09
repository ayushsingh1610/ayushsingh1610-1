import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Skills/>
      <Projects/>
      <Education/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
