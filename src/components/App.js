import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import { fetchPosts } from '../actions/posts';
import { Home, Navbar, Page404, Login, Signup } from './';
import * as jwtDecode from 'jwt-decode';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());

    const token = localStorage.getItem('token');

    // if token is there user is logged in
    if (token) {
      const user = jwtDecode(token);

      console.log('user', user);
    }
  }

  render() {
    const { posts } = this.props;
    console.log('Props', this.props);
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            {/* the compo above these will be common for all */}
            <Route
              exact
              path="/"
              render={(props) => {
                return <Home {...props} posts={posts} />;
              }}
            />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
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
