import { useAnimate, useInView } from "framer-motion";
import React, { useEffect } from "react";

export const Page11 = () => {
  const [scopePromises, animatePromises] = useAnimate();
  const isInViewPromises = useInView(scopePromises, { once: true });

  useEffect(() => {
    if (isInViewPromises) {
      animatePromises("div", { opacity: [0, 1] }, { duration: 1, delay: 0.3 });
    }
  }, [isInViewPromises]);
  return (
    <div className="page11" ref={scopePromises}>
      <div className="page11-wrapper">
        <img
          src="https://imageupload.io/ib/CsM5m1TV6huQLIy_1692322886.png"
          alt=""
        />
        <h1>Regular Visit Housing Care Service</h1>
        <ul>
          <li>
            <h2>Use of self-developed natural detergents, not chemicals</h2>
            <p>
              ZERO worries about chemical composition with a self-developed
              natural detergent that does not contain harmful ingredients.
            </p>
          </li>
          <li>
            <h2>Full package-service at a fixed rate</h2>
            <p>
              A seperate order is required if you want additional services other
              than existing services.
            </p>
          </li>
          <li>
            <h2>Reliable and reliable after service feedback</h2>
            <p>After service care for each and every customer.</p>
          </li>
          <li>
            <h2>A Professionally-trained homecare technicians</h2>
            <p>
              The most reliable direct service provider, not an outsourcing
              company.
            </p>
          </li>
          <li>
            <h2>Utoville Housing Care, consisting only essential services</h2>
            <p>
              A must-have service that contains only the services that customers
              need without selling unnecessary and unsold products.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
