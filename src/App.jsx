import "./App.scss";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/about/About";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
