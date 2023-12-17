import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Visual from "./components/Layout/Visual";
import Action from "./components/UI/Action";
import Betta from "./components/UI/Betta";
import Brands from "./components/UI/Brands";
import Future from "./components/UI/Future";
import Hero from "./components/UI/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Visual />
      <Brands />
      <Future />
      <Betta />
      <Action />
      <Footer />
    </div>
  );
}

export default App;
