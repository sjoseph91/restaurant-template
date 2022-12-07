import "./App.css";
import Hero from "./assets/components/Hero";
import About from "./assets/components/About";
import Why from "./assets/components/Why";

function App() {
  return (
    <div className="App position-relative">
      <Hero />
      <About />
      <Why />
    </div>
  );
}

export default App;
