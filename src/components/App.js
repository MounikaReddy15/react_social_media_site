import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPosts } from '../actions/posts';
import { PostsList } from './';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    console.log('Props', this.props);
    return (
      <div>
        <nav className="nav">
          <div className="left-div">
            <img
              src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
              alt="logo"
            />
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
                <li>Log in</li>
                <li>Log out</li>
                <li>Register</li>
              </ul>
            </div>
          </div>
        </nav>
        <PostsList posts={posts} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
