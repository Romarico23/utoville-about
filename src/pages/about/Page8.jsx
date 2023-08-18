import { useAnimate, useInView } from "framer-motion";
import React, { useEffect } from "react";

export const Page8 = () => {
  const [scopePromises, animatePromises] = useAnimate();
  const isInViewPromises = useInView(scopePromises, { once: true });

  useEffect(() => {
    if (isInViewPromises) {
      animatePromises("div", { opacity: [0, 1] }, { duration: 1, delay: 0.3 });
    }
  }, [isInViewPromises]);
  return (
    <div className="page8" ref={scopePromises}>
      <div className="page8-wrapper">
        <div className="page8-col-1">
          <img
            src="https://imageupload.io/ib/K1P9RLzcLQ3eqc2_1692320970.png"
            alt=""
          />
          <h1>
            Dust, germs and viruses that threaten the health of our family!!!
          </h1>
        </div>
        <div className="page8-col-2">
          <div className="subcol-1">
            <img
              src="https://imageupload.io/ib/hbFUpvtGCu6I3ph_1692320970.jpg"
              alt=""
            />
            <span>
              <p>
                It's frustrating to find a contractor every time, and I think
                it'll be hard to clean like this <br />
                WHAT SHOULD I DO?
              </p>
            </span>
          </div>
          <div className="subcol-2">
            <h2>Dust?</h2>
            <h2>Allergies?</h2>
            <h2>Germ?</h2>
            <h2>Viruses?</h2>
            <h2>Diseases?</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
