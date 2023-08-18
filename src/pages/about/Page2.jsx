import React, { useEffect, useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

export const Page2 = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prevNumber) => (prevNumber % 4) + 1); // Reset to 1 after reaching 4
    }, 6000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="page2">
      <div className="page2-wrapper">
        <div className="page2-col-1">
          <h1>Why Inspection is Important?</h1>
          <div className="page2-navlinks">
            <button
              onClick={() => {
                handleImgBtn1Click();
                handlePageChange(1);
              }}
              style={{
                color: currentPage === 1 ? "rgb(0, 28, 207)" : "black",
              }}
            >
              <AiOutlineCheckCircle />
              <p>Reduce Cost of Future Defects and Damages</p>
            </button>
            <button
              onClick={() => {
                handleImgBtn2Click();
                handlePageChange(2);
              }}
              style={{ color: currentPage === 2 ? "rgb(0, 28, 207)" : "black" }}
            >
              <AiOutlineCheckCircle />
              <p>Slow down on Property Depreciation cost</p>
            </button>
            <button
              onClick={() => {
                handleImgBtn3Click();
                handlePageChange(3);
              }}
              style={{ color: currentPage === 3 ? "rgb(0, 28, 207)" : "black" }}
            >
              <AiOutlineCheckCircle />
              <p>
                Increase in Property Value through constant records of home
                status
              </p>
            </button>
            <button
              onClick={() => {
                handleImgBtn4Click();
                handlePageChange(4);
              }}
              style={{ color: currentPage === 4 ? "rgb(0, 28, 207)" : "black" }}
            >
              <AiOutlineCheckCircle />
              <p>
                Provide records of home maintenance updates for lessor/lessee
                and buyer/seller
              </p>
            </button>
          </div>
        </div>
        <div className="page2-col-2">
          <img
            src={currentPage === 1 && "https://i.ibb.co/LRFLR33/tab1.jpg"}
            alt=""
          />
          <img
            src={currentPage === 2 && "https://i.ibb.co/jkhgsKM/tab2.jpg"}
            alt=""
          />
          <img
            src={currentPage === 3 && "https://i.ibb.co/xLcrdXw/tab3.jpg"}
            alt=""
          />
          <img
            src={currentPage === 4 && "https://i.ibb.co/42nf09S/tab4.jpg"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
