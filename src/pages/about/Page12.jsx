import { useAnimate, useInView } from "framer-motion";
import React, { useEffect } from "react";

export const Page12 = () => {
  const [scopePromises, animatePromises] = useAnimate();
  const isInViewPromises = useInView(scopePromises, { once: true });

  useEffect(() => {
    if (isInViewPromises) {
      animatePromises("div", { opacity: [0, 1] }, { duration: 1, delay: 0.3 });
    }
  }, [isInViewPromises]);
  return (
    <div className="page12" ref={scopePromises}>
      <div className="page12-wrapper">
        <img
          src="https://imageupload.io/ib/CsM5m1TV6huQLIy_1692322886.png"
          alt=""
        />
        <h1>Regular Visit Housing Care Service</h1>
        <h2>Our Home Encyclopedia</h2>
        <h2>UTOVILLE housing care regular visit service</h2>
        <ul>
          <li>
            <img
              src="https://imageupload.io/ib/As1C7AvF7qhhJdT_1692323101.jpg"
              alt=""
            />
            <h3>Kitchen Cleaning</h3>
          </li>
          <li>
            <img
              src="https://imageupload.io/ib/66fzoZhA9jA6jm6_1692323101.jpg"
              alt=""
            />
            <h3>Bathroom Cleaning</h3>
          </li>
          <li>
            <img
              src="https://imageupload.io/ib/qWKUpYQwyUhlzXQ_1692323101.jpg"
              alt=""
            />
            <h3>Mattress Cleaning</h3>
          </li>
        </ul>
        <p>
          For our precious family's health daily life, all-in-one care that
          provides only the services that are essential to our house without
          having a hard time looking for a contractor
        </p>
      </div>
    </div>
  );
};
