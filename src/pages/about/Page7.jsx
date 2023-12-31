import { useAnimate, useInView } from "framer-motion";
import React, { useEffect } from "react";

export const Page7 = () => {
  const [scopePromises, animatePromises] = useAnimate();
  const isInViewPromises = useInView(scopePromises, { once: true });

  useEffect(() => {
    if (isInViewPromises) {
      animatePromises("div", { opacity: [0, 1] }, { duration: 1, delay: 0.3 });
    }
  }, [isInViewPromises]);
  return (
    <div className="page7" ref={scopePromises}>
      <div className="page7-wrapper">
        <img
          src="https://imageupload.io/ib/BpldrrhgIKlTGn5_1692320631.jpg"
          alt=""
        />
        <h3>
          They can cause atopic dermatitis intensifies, eczema, sensitive
          dermatitis, and various allergic skin diseases.
          <br />
          Ocular/laryngeal/airway musocal irritation,
          headache/rhinitis,asthma,pneumonia, and respiratory diseases will be
          aggravated
        </h3>
        <h1>Threats to the health of our precious children.</h1>
      </div>
    </div>
  );
};
