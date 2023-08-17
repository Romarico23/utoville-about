import React from "react";
import { IoIosContact } from "react-icons/io";
import {
  BsCalendarDay,
  BsClipboardCheck,
  BsBuildingFillUp,
} from "react-icons/bs";
import { BiUpload } from "react-icons/bi";
import { SlUserFollowing } from "react-icons/sl";

export const Page3 = () => {
  return (
    <div className="page3">
      <div className="page3-wrapper">
        <div className="page3-col-1">
          <h1>How does it Works?</h1>
        </div>
        <div className="page3-col-2">
          <div className="register-wrapper">
            <span>
              <IoIosContact />
            </span>
            <h3>1. Register</h3>
            <p>
              "Book Now" to place your reservation on our website. (Name and
              phone number are required for submission) You can also make a
              "Phone Request" by calling 0945-183-4574 or 0960-462-4472.
            </p>
          </div>
          <div className="schedule-wrapper">
            <span>
              <BsCalendarDay />
            </span>
            <h3>2. Schedule</h3>
            <p>
              After confirming your payment, we will coordinate and finalize the
              schedule. Our representative will contact you 1 to 2 days prior to
              the reserved date for schedule confirmation.
            </p>
          </div>
          <div className="sitevisit-wrapper">
            <span>
              <BsBuildingFillUp />
            </span>
            <h3>3. Site Visit</h3>
            <p>
              After confirming your payment, we will coordinate and finalize the
              schedule. Our representative will contact you 1 to 2 days prior to
              the reserved date for schedule confirmation.
            </p>
          </div>
          <div className="uploading-wrapper">
            <span>
              <BiUpload />
            </span>
            <h3>4. Uploading of Report</h3>
            <p>
              Upon completion of the inspection, the expert will create and
              upload the inspection report.
            </p>
          </div>
          <div className="checking-wrapper">
            <span>
              <BsClipboardCheck />
            </span>
            <h3>5. Checking of Report</h3>
            <p>
              Upon completion of the inspection, the expert will create and
              upload the inspection report.
            </p>
          </div>
          <div className="followup-wrapper">
            <span>
              <SlUserFollowing />
            </span>
            <h3>6. Follow up</h3>
            <p>
              Upon completion of the inspection, the expert will create and
              upload the inspection report.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
