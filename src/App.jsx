import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen font-[Inter] bg-stone-950 text-amber-50">
      <Hero />
      <Menu />
      <About />
      <Footer />
    </div>
  );
}

export default App;
