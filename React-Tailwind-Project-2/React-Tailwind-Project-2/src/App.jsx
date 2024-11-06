import About from "./Components/About/About";
import Awards from "./Components/Awards/Awards";
import Clients from "./Components/Clients/Clients";
import Contact from "./Components/Contact/Contact";
import FAQ from "./Components/FAQ/FAQ";
import Flexible from "./Components/Flexible/Flexible";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Recent from "./Components/Recent/Recent";
import Works from "./Components/Works/Works";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Awards />
      <About />
      <Works />
      <Flexible />
      <Clients />
      <FAQ />
      <Recent />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
