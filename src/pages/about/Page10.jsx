import { useAnimate, useInView } from "framer-motion";
import React, { useEffect } from "react";

export const Page10 = () => {
  const [scopePromises, animatePromises] = useAnimate();
  const isInViewPromises = useInView(scopePromises, { once: true });

  useEffect(() => {
    if (isInViewPromises) {
      animatePromises("div", { opacity: [0, 1] }, { duration: 1, delay: 0.3 });
    }
  }, [isInViewPromises]);
  return (
    <div className="page10" ref={scopePromises}>
      <div className="page10-wrapper">
        <div className="page10-col-1">
          <img
            src="https://imageupload.io/ib/CsM5m1TV6huQLIy_1692322886.png"
            alt=""
          />
          <h1>The answer is UTOVILLE</h1>
          <h1>Regular Visit Housing Care Service</h1>
        </div>
        <div className="page10-col-2">
          <div className="col-2-subcol-1">
            <h2>UTOVILLE</h2>
            <h2>Housing Care Service</h2>
            <ul>
              <li>Kitchen Basin & Drain Clean</li>
              <li>Bathroom Sink & Drain Clean</li>
              <li>Mattress Light Stain Remove</li>
              <li>Sofa Light Stain Remove</li>
              <li>Carpet Disinfection</li>
              <li>Kitchen Hood Clean</li>
              <li>Grease Trap Cleaning</li>
            </ul>
            <h1 style={{ color: "red" }}>ALL-IN-ONE</h1>
            <h2>Solve it all at one-go with UTOVILLE</h2>
          </div>
          <div className="col-2-subcol-2">
            <img
              src="https://imageupload.io/ib/bcHqW5gWiP8RMTf_1692322887.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
