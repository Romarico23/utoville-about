import { useAnimate, useInView } from "framer-motion";
import React, { useEffect } from "react";

export const Page6 = () => {
  const [scopePromises, animatePromises] = useAnimate();
  const isInViewPromises = useInView(scopePromises, { once: true });

  useEffect(() => {
    if (isInViewPromises) {
      animatePromises("div", { opacity: [0, 1] }, { duration: 1, delay: 0.3 });
    }
  }, [isInViewPromises]);
  return (
    <div className="page6" ref={scopePromises}>
      <div className="page6-wrapper">
        <div className="page6-col-1">
          <h1>We clean every day, Will it really be clean?</h1>
          <img
            src="https://imageupload.io/ib/bdYrpK4vEVha1QD_1692319550.png"
            alt=""
          />
        </div>
        <div className="page6-col-2">
          <img
            src="https://imageupload.io/ib/sMSRvCQyHDxnjK8_1692319550.png"
            alt=""
          />
          <img
            src="https://imageupload.io/ib/gaXSF1bIlF88CNa_1692319551.png"
            alt=""
          />
          <img
            src="https://imageupload.io/ib/VnBwbHLDJnMfuAp_1692319550.png"
            alt=""
          />
          <img
            src="https://imageupload.io/ib/KG2UfdYjkbZdtST_1692319550.png"
            alt=""
          />
        </div>
        <div className="page6-col-3">
          <span>
            <h2>
              With all the invisible dust, molds, rust, keratin bacteria and
              other viruses, cause various respiratory and skin diseases.
            </h2>
          </span>
        </div>
        <div className="page6-col-4">
          <img
            src="https://imageupload.io/ib/b8huWkmPu7YDDso_1692320080.png"
            alt=""
          />
          <img
            src="https://imageupload.io/ib/xCfBKrqWvQiXfGA_1692320080.png"
            alt=""
          />
          <img
            src="https://imageupload.io/ib/1dThzMDs6Cwtb4M_1692320080.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
