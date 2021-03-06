import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import React from 'react';
import { logoutUser } from '../actions/auth';

class Navbar extends React.Component {
  logOut = () => {
    localStorage.removeItem('token');
    this.props.dispatch(logoutUser());
  };
  render() {
    const { auth } = this.props;
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
          {auth.isLoggedin && (
            <div className="user">
              <Link to="/settings">
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/3576/3576837.svg"
                  alt="user-dp"
                  id="user-dp"
                />
              </Link>
              <span>{auth.user.name}</span>
            </div>
          )}
          <div className="nav-links">
            <ul>
              {!auth.isLoggedin && (
                <li>
                  <Link to="/login">Log in </Link>
                </li>
              )}

              {auth.isLoggedin && <li>onClick={this.logOut}Log out</li>}

              {!auth.isLoggedin && (
                <li>
                  <Link to="/signup">Register </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Navbar);
