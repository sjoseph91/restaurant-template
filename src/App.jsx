import "./App.css";
import Hero from "./assets/components/Hero";
import About from "./assets/components/About";
import Why from "./assets/components/Why";
import Menu from "./assets/components/Menu";
import Specials from "./assets/components/Specials";

function App() {
  return (
    <div className="App position-relative">
      <Hero />
      <About />
      <Why />
      <Menu />
      <Specials />
    </div>
  );
}

export default App;
