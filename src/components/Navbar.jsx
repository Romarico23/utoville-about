import {
  useAnimate,
  useMotionValueEvent,
  usePresence,
  useScroll,
} from "framer-motion";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";

export const Navbar = () => {
  const [show, setShow] = useState(true);
  const { scrollY } = useScroll();
  const [isPresent, safeToRemove] = usePresence();

  const [scopeHeader, animateHeader] = useAnimate();
  useEffect(() => {
    if (isPresent) {
      animateHeader(
        scopeHeader.current,
        { transform: ["translateY(-200px)", "translateY(0px)"] },
        { opacity: [0, 1] },
        { duration: 0.5 }
      );
    }
  }, [isPresent]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (window.scrollY > 200) {
      setShow(false);
    } else {
      setShow(true);
    }
  });

  return (
    <div
      className="navbar"
      ref={scopeHeader}
      style={{
        transform: show ? "none" : "translateY(-200px)",
        opacity: show ? 1 : 0,
        transition: "all .7s ",
      }}
    >
      <div className="header">
        <a href="" className="utoville-logo">
          <img
            src="http://home.utoville.com/static/user/img/logo/logo.png"
            alt=""
          />
        </a>
        <form action="">
          <AiOutlineSearch className="icon-search" />
          <input
            type="text"
            placeholder="Search Products..."
            className="input-search"
          />
        </form>
        <div className="cart-account-wrapper">
          <a href="" className="cart">
            <BiShoppingBag />
            <span>0</span>
          </a>
          <a href="" className="account">
            <VscAccount />
          </a>
        </div>
      </div>
      <nav className="nav-links">
        <ul>
          <li>
            <a href="" className="dropdown">
              Subscription
            </a>
            <div className="dropdown-content">
              <a href="">About</a>
            </div>
          </li>
          <li>
            <a href="" className="dropdown">
              Cleaning
            </a>
            <div className="dropdown-content">
              <a href="">Home Check</a>
              <a href="">Move-In Cleaning</a>
            </div>
          </li>
          <li>
            <a href="" className="dropdown">
              Disinfection
            </a>
            <div className="dropdown-content">
              <a href="">House</a>
              <a href="">Swimming Pool</a>
              <a href="">Inspection</a>
            </div>
          </li>
          <li>
            <a href="" className="dropdown">
              Repair
            </a>
            <div className="dropdown-content">
              <a href="">Exterior Repair</a>
              <a href="">Interior Repair</a>
              <a href="">Remodeling</a>
              <a href="">Others</a>
            </div>
          </li>
          <li>
            <a href="" className="dropdown">
              Appliance Care
            </a>
            <div className="dropdown-content">
              <a href="">Air Conditioner</a>
              <a href="">Refrigerator</a>
              <a href="">Washing Machine</a>
            </div>
          </li>
          <li>
            <a href="" className="dropdown">
              Moving Service
            </a>
            <div className="dropdown-content">
              <a href="">Regular/Packing Move</a>
              <a href="">Rental Truck</a>
            </div>
          </li>
          <li>
            <a href="" className="dropdown">
              Car Service
            </a>
            <div className="dropdown-content">
              <a href="">Hand Wash</a>
              <a href="">Interior Cleaning</a>
              <a href="">Maintenance</a>
            </div>
          </li>
          <li>
            <a href="" className="dropdown">
              Water Delivery
            </a>
            <div className="dropdown-content">
              <a href="">5gl Drum & Pet</a>
              <a href="">Bottled Water</a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};
