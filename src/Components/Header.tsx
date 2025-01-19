import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";

function Header() {
  return (
    <div className="header_box">
      <div id="top_header_blue_box">
        <div id="top_header_lines">
          CYBER MONDAY FREE REUSABLE TOTE WITH EVERY ORDER
        </div>
      </div>
      <header className="header">
      <nav className="nav">
        <div className="nav-left">
          <a href="#shop" className="nav-link">
            SHOP <span className="dropdown-icon"> <IoIosArrowDown /> </span>
          </a>
        </div>
        <div className="nav-center">
          <a href="#bundles" className="nav-link">
            BUNDLES
          </a>
          <a href="#home" className="brand-logo">
            wildwonder®
          </a>
          <a href="#learn" className="nav-link">
            LEARN <span className="dropdown-icon"> <IoIosArrowDown /> </span>
          </a>
          <a href="#find" className="nav-link">
            FIND WILDWONDER
          </a>
        </div>
        <div className="nav-right">
          <a href="#profile" className="icon">
            <FaUser />
          </a>
          <a href="#cart" className="icon">
            <GiShoppingCart />
          </a>
        </div>
      </nav>
    </header>
    </div>
  );
}

export default Header;
