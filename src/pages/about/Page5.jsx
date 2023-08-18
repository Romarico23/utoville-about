import { useAnimate, useInView } from "framer-motion";
import React, { useEffect } from "react";

export const Page5 = () => {
  const [scopePromises, animatePromises] = useAnimate();
  const isInViewPromises = useInView(scopePromises, { once: true });

  useEffect(() => {
    if (isInViewPromises) {
      animatePromises("div", { opacity: [0, 1] }, { duration: 1, delay: 0.3 });
    }
  }, [isInViewPromises]);
  return (
    <div className="page5" ref={scopePromises}>
      <div className="page5-wrapper">
        <div className="page5-col-1">
          <div className="page5-col-1-wrapper-1">
            <img
              src="https://imageupload.io/ib/17OIFbNhb9vuNqE_1692319174.png"
              alt=""
            />
            <h3>grease trap is stink</h3>
          </div>
          <div className="page5-col-1-wrapper-2">
            <img
              src="https://imageupload.io/ib/l0pU61y82IzPUBV_1692319175.png"
              alt=""
            />
          </div>
          <div className="page5-col-1-wrapper-3">
            <div className="col-1-wrapper-1">
              <h3>From dust to mites</h3>
              <h3>carpets do have stains</h3>
            </div>
            <div className="col-1-wrapper-2">
              <h3>drains are clogged</h3>
              <h3>mattresses are never been disinfect</h3>
            </div>
          </div>
        </div>
        <div className="page5-col-2">
          <h1>
            <span>Utoville </span>
            <span>Housing Care</span>
          </h1>
          <h2>ALL-IN-ONE</h2>
          <h3>SOLVE IT ONCE FOR ALL!</h3>
        </div>
      </div>
    </div>
  );
};
