import React from "react";
import { ClipLoader, BounceLoader, PuffLoader } from "react-spinners";
import arrowIcon from "../images/icon-arrow.svg";

const Header = ({ handleClick, ipData, handleChange, loading }) => {
  return (
    <section className="header">
      <h1 className="header__title">IP Address Tracker</h1>
      <div className="header__input-section">
        <input
          className="header__input"
          type="text"
          placeholder="Search for any IP address or domain"
          onChange={handleChange}
        />
        <button className="header__input-btn" onClick={handleClick}>
          <img src={arrowIcon} alt="Button Arrow Icon" />
        </button>
      </div>

      {loading ? (
        <div className="header__details-section">
          <div className="header__details-section__item">
            <h5>ip address</h5>
            <h2>{ipData.ip}</h2>
          </div>
          <div className="header__details-section__item">
            <h5>Location</h5>
            <h2>{ipData.location?.region}</h2>
          </div>
          <div className="header__details-section__item">
            <h5>timezone</h5>
            <h2>{ipData.location?.timezone}</h2>
          </div>
          <div className="header__details-section__item">
            <h5>isp</h5>
            <h2>{ipData.isp}</h2>
          </div>
        </div>
      ) : (
        <div className="header__details-section--loading">
          <PuffLoader color="blue" size={100} />
        </div>
      )}
    </section>
  );
};

export default Header;
