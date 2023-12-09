import Header from "./components/Layout/Header";
import Visual from "./components/Layout/Visual";
import BackgroundText from "./components/UI/BackgroundText";
import Hero from "./components/UI/Hero";
import Round from "./components/UI/Round";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <BackgroundText text="Building" />
      <Visual />
    </div>
  );
}

export default App;
