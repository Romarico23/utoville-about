import { useAnimate, useInView } from "framer-motion";
import React, { useEffect } from "react";

export const Page13 = () => {
  const [scopePromises, animatePromises] = useAnimate();
  const isInViewPromises = useInView(scopePromises, { once: true });

  useEffect(() => {
    if (isInViewPromises) {
      animatePromises("div", { opacity: [0, 1] }, { duration: 1, delay: 0.3 });
    }
  }, [isInViewPromises]);
  return (
    <div className="page13" ref={scopePromises}>
      <div className="page13-wrapper">
        <img
          src="https://imageupload.io/ib/CsM5m1TV6huQLIy_1692322886.png"
          alt=""
        />
        <h1>Regular Visit Housing Care Service</h1>

        <h1>Reasons why one MUST avail the service</h1>
        <h2>
          Pollutants in living spaces that threaten our precious family's health
        </h2>
        <p>
          Various pollutants such as dust, mold, and viruses inside our bed
          mattresses, kitchen and toilet drains are not easy to remove by
          general cleaning, so you should leave them to professionals who have
          completed thorough professional cleaning training.
        </p>
      </div>
    </div>
  );
};
