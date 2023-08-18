import React, { useEffect, useRef, useState } from "react";
import { motion, useDragControls } from "framer-motion";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { images } from "../../assets/page4images";
import { BiRightArrow } from "react-icons/bi";
import { useAnimate, useInView } from "framer-motion";

export const Page4 = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const [scopePromises, animatePromises] = useAnimate();
  const isInViewPromises = useInView(scopePromises, { once: true });

  useEffect(() => {
    if (isInViewPromises) {
      animatePromises("div", { opacity: [0, 1] }, { duration: 1, delay: 0.3 });
    }
  }, [isInViewPromises]);

  return (
    <div className="page4" ref={scopePromises}>
      <div className="page4-wrapper">
        <motion.div className="page4-col-1">
          <Carousel
            // drag="x"
            // dragDirectionLock={{ width }}
            // dragConstraints={{ right: 0, left: -width }}
            // dragConstraints={{ right: 0, left: -width }}
            // dragElastic={0.8}
            // onDragEnd={handleDragEnd}

            swipeable={true}
            draggable={true}
            // showDots={true}
            responsive={responsive}
            // ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={6000}
            // keyBoardControl={true}
            // customTransition="all .5"
            // transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            // dotListClass="custom-dot-list-style"
            // itemClass="carousel-item-padding-40-px"
          >
            {/* <img src={images[index]} alt="" />
            <button onClick={prevStep}>Previos</button>
            <button onClick={nextStep}>Next</button> */}

            {images.map((image) => {
              return (
                <motion.div
                  key={image}
                  className="item"
                  // initial={{ opacity: currentIndex === index ? 1 : 0, x: currentIndex === index ? 0 : 100 }}
                  // animate={{ opacity: currentIndex === index ? 1 : 0, x: currentIndex === index ? 0 : 100 }}
                >
                  <img src={image.imageUrl} alt="" />
                  <h3>{image.caption}</h3>
                </motion.div>
              );
            })}
          </Carousel>
        </motion.div>
        <div className="page4-col-2">
          <h1>Basic Service</h1>
          <h2>We Disinfect, Declog, Clean For Every 2 Months</h2>
          <p>
            <BiRightArrow />
            Utoville Housing Care is a regular visit service that conveniently
            and completely cares for customers' healthy lifestyle through
            professional manpower and equipment.
          </p>
        </div>
      </div>
    </div>
  );
};
