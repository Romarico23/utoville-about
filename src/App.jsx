import { useEffect } from "react";
import "./App.scss";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/about/About";
import { useAnimate, useInView } from "framer-motion";

function App() {
  const [scopePromises, animatePromises] = useAnimate();
  const isInViewPromises = useInView(scopePromises, { once: true });

  useEffect(() => {
    if (isInViewPromises) {
      animatePromises("div", { opacity: [0, 1] }, { duration: 2, delay: 0.3 });
    }
  }, [isInViewPromises]);

  return (
    <>
      <div className="App" ref={scopePromises}>
        <Navbar />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
