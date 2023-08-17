import React, { useEffect, useRef, useState } from "react";
import { motion, useDragControls } from "framer-motion";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { images } from "../../assets/page4images";
import { BiRightArrow } from "react-icons/bi";

export const Page4 = () => {
  //   const [currentIndex, setCurrentIndex] = useState(0);

  //   const goToNextImage = () => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   };

  //   const goToPrevImage = () => {
  //     setCurrentIndex(
  //       (prevIndex) => (prevIndex - 1 + images.length) % images.length
  //     );

  //   };
  //   console.log(images);

  //   const [currentIndex, setCurrentIndex] = useState(0);

  //   const handleDragEnd = (event, info) => {
  //     if (info.offset.x > 50) {
  //       goToPreviousSlide();
  //     } else if (info.offset.x < -50) {
  //       goToNextSlide();
  //     }
  //   };

  //   const goToPreviousSlide = () => {
  //     setCurrentIndex(
  //       (prevIndex) => (prevIndex - 1 + images.length) % images.length
  //     );
  //   };

  //   const goToNextSlide = () => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   };

  //   console.log(currentIndex);

  //   const [width, setWidth] = useState(0);

  //   const carousel = useRef();

  //   useEffect(() => {
  //     setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  //     // setWidth(window.innerWidth);
  //   }, []);

  //   const [index, setIndex] = useState(0);

  //   const nextStep = () => {
  //     if (index === images.length - 1) {
  //       setIndex(0);
  //       return;
  //     }
  //     setIndex(index + 1);
  //   };

  //   const prevStep = () => {
  //     if (index === 0) {
  //       setIndex(images.length - 1);
  //       return;
  //     }
  //     setIndex(index - 1);
  //   };

  //   console.log(index);

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

  return (
    <div className="page4">
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
