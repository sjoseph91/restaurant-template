import "./App.css";
import Hero from "./assets/components/Hero";
import About from "./assets/components/About";
import Why from "./assets/components/Why";
import Menu from "./assets/components/Menu";

function App() {
  return (
    <div className="App position-relative">
      <Hero />
      <About />
      <Why />
      <Menu />
    </div>
  );
}

export default App;
