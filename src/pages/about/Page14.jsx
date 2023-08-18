import { useAnimate, useInView } from "framer-motion";
import React, { useEffect } from "react";

export const Page14 = () => {
  const [scopePromises, animatePromises] = useAnimate();
  const isInViewPromises = useInView(scopePromises, { once: true });

  useEffect(() => {
    if (isInViewPromises) {
      animatePromises("div", { opacity: [0, 1] }, { duration: 1, delay: 0.3 });
    }
  }, [isInViewPromises]);
  return (
    <div className="page14" ref={scopePromises}>
      <div className="page14-wrapper">
        <img
          src="https://imageupload.io/ib/CsM5m1TV6huQLIy_1692322886.png"
          alt=""
        />
        <h1>Regular Visit Housing Care Service</h1>
        <div>
          <img
            src="https://imageupload.io/ib/yiP8PtJtPz8v7Yc_1692324105.jpg"
            alt=""
          />
          <ul>
            <h3>Problems with Uncleaned Sewage Piping</h3>
            <li>
              Causes various skin diseases due to foreign substances such as
              rust
            </li>
            <li>Reduction of pipe life due to accumulated sludge in pipes</li>
            <li>Lower Water Pressure and Rising Water Taxes</li>
          </ul>
        </div>
        <div>
          <img
            src="https://imageupload.io/ib/J21rbFmZk1PZGBz_1692324105.jpg"
            alt=""
          />
          <ul>
            <h3>Problems with Uncleaned Mattresses</h3>
            <li>Allergy caused by dust and mites</li>
            <li>Eczema</li>
            <li>Causing various dermatitis</li>
          </ul>
        </div>
        <div>
          <img
            src="https://imageupload.io/ib/BZfRoIbFiOdCFzk_1692324105.jpg"
            alt=""
          />
          <div>
            <ul>
              <h3>Problems with Uncleaned Kitchen Hood Filters</h3>
              <li>Risk of fire due to oil stains in the filter</li>
              <li>Inducement of lung cancer in housewives</li>
              <li>Reduced hood function and causing odor</li>
            </ul>
          </div>
        </div>
        <div>
          <img
            src="https://imageupload.io/ib/q8ZrOezdKHfZkLP_1692324105.jpg"
            alt=""
          />
          <div>
            <ul>
              <h3>Problems with Undisinfected Houses</h3>
              <li>Risk of daily infection due to droplets & aerosols</li>
              <li>Other more infection from face-to-face family</li>
              <li>The spread of bacteria and viruses</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
