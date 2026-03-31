import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Theme from "./components/Theme";
import Speakers from "./components/Speakers";
import Program from "./components/Program";
import Sponsors from "./components/Sponsors";
import Registration from "./components/Registration";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import EventInfo from "./components/EventInfo";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <EventInfo />
      <About />
      <Theme />
      <Speakers />
      <Program />
      <Sponsors />
      <Registration />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;