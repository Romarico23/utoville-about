import { useAnimate, useInView } from "framer-motion";
import React, { useEffect } from "react";

export const Page15 = () => {
  const [scopePromises, animatePromises] = useAnimate();
  const isInViewPromises = useInView(scopePromises, { once: true });

  useEffect(() => {
    if (isInViewPromises) {
      animatePromises("div", { opacity: [0, 1] }, { duration: 1, delay: 0.3 });
    }
  }, [isInViewPromises]);
  return (
    <div className="page15" ref={scopePromises}>
      <div className="page15-wrapper">
        <h1>Are you considering a home inspection?</h1>
        <h2>We inspect homes like we're BUYING TEAM OURSELVES!</h2>
        <button>Contact Us</button>
      </div>
    </div>
  );
};
