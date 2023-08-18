import {
  useAnimate,
  useMotionValueEvent,
  usePresence,
  useScroll,
} from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

export const Footer = () => {
  // const [show, setShow] = useState(true);
  // const { scrollY } = useScroll();
  // const [isPresent, safeToRemove] = usePresence();

  // const [scopeHeader, animateHeader] = useAnimate();
  // useEffect(() => {
  //   if (isPresent) {
  //     animateHeader(
  //       scopeHeader.current,
  //       { transform: ["translateY(-200px)", "translateY(0px)"] },
  //       { opacity: [0, 1] },
  //       { duration: 0.5 }
  //     );
  //   }
  // }, [isPresent]);

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   if (window.scrollY > 200) {
  //     setShow(false);
  //   } else {
  //     setShow(true);
  //   }
  // });

  const windowScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="footer">
      <div
        className="scrollToTop"
        style={
          {
            // opacity: !show ? 1 : 0,
            // transition: "all .5s ",
          }
        }
      >
        <a onClick={windowScrollToTop}>
          <FaArrowAltCircleUp />
        </a>
      </div>
    </div>
  );
};
