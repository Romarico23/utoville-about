import React from "react";

export const Page1 = () => {
  return (
    <div className="page1">
      <div className="page1-wrapper">
        <div className="page1-header">
          <div className="header-wrapper">
            <h1>Home Inspection</h1>
            <h1>+</h1>
            <h1>Basic Service</h1>
            <h1 class="ribbon">FOR ₱499 ONLY!</h1>
            <h3>
              <span>
                Are you really going to leave your million-peso house in that
                condition?
              </span>
              <span>We inspect homes like we're BUYING THEM OURSELVES!</span>
            </h3>
          </div>
          <div className="btn-wrapper">
            <button>INQUIRE NOW</button>
          </div>
        </div>
        <div className="page1-img">
          <img src="https://i.ibb.co/3dgdMm3/checker-img.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};
