import React from "react";
import { Link } from "react-router-dom";
import SlideShow from "./SlideShow";

const Navbar = () => (
  <div className="menu-container">
    <div className="menu">
      <div className="label">ARTWORK</div>
      <div className="spacer"></div>
      <div className="item">
        <span>GUYS & DOLLS</span>
      </div>
      <div className="item">
        <span>THE BEAUTIFUL GAME</span>
      </div>
      <Link to="/casting">
        <div className="item">
          <span>CASTINGS</span>
        </div>
      </Link>
      <div className="item">
        <span>NIGHTSCAPES</span>
      </div>
      <div className="item">
        <span>NUDES</span>
      </div>
      <div className="item">
        <span>MISCELLANEOUS</span>
      </div>
    </div>
    <div className="carousel-menu-container">
      <div className="menu-container-two">
        <div className="menu">
          <div className="label">BIOGRAPHY</div>
        </div>
        <div className="menu">
          <div className="label">CONTACT</div>
        </div>
      </div>
      <div className="carousel-container">
        <SlideShow />
      </div>
    </div>
  </div>
);

export default Navbar;
