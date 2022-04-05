import React from "react";
import arrowIcon from "../images/icon-arrow.svg";

const Header = () => {
  return (
    <section className="header">
      <h1 className="header__title">IP Address Tracker</h1>
      <div className="header__input-section">
        <input
          className="header__input"
          type="text"
          placeholder="Search for any IP address or domain"
        />
        <button className="header__input-btn">
          <img src={arrowIcon} alt="Button Arrow Icon" />
        </button>
      </div>
      <div className="header__details-section">
        <div className="header__details-section__item">
          <h5>ip address</h5>
          <h2>192.168.0.1</h2>
        </div>
        <div className="header__details-section__item">
          <h5>Location</h5>
          <h2>
            Brooklyn, NY, <br /> 10001
          </h2>
        </div>
        <div className="header__details-section__item">
          <h5>timezone</h5>
          <h2>UTC -05:00</h2>
        </div>
        <div className="header__details-section__item">
          <h5>isp</h5>
          <h2>
            SpaceX <br /> Starlink
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Header;
