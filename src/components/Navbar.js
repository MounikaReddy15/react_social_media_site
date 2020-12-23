import React from 'react';

import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav className="nav">
      <div className="left-div">
        <Link to="/">
          <img
            src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="search-container">
        <img
          className="search-icon"
          src="https://www.flaticon.com/svg/static/icons/svg/622/622669.svg"
          alt="search-icon"
        />
        <input placeholder="Search" />
        <div className="search-results">
          <ul>
            <li className="search-results-row">
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/3576/3576837.svg"
                alt="user-dp"
              />
              <span>Rana</span>
            </li>
          </ul>
          <ul>
            <li className="search-results-row">
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/3576/3576837.svg"
                alt="user-dp"
              />
              <span>Dheer</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-nav">
        <div className="user">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/3576/3576837.svg"
            alt="user-dp"
            id="user-dp"
          />
          <span>Shiva</span>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/login">Log in </Link>
            </li>
            <li>
              <Link to="/logout">Log out </Link>
            </li>
            <li>
              <Link to="/signup">Register </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
