import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostsList extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="posts-list">
        {posts.map((post) => {
          return (
            <div className="post-wrapper" key={post._id}>
              <div className="post-header">
                <div className="post-avatar">
                  <img
                    src="https://www.flaticon.com/svg/static/icons/svg/3576/3576837.svg"
                    alt="user-pic"
                  />
                  <div>
                    <span className="post-author">{post.user.name}</span>
                    <span className="post-time">a minute ago</span>
                  </div>
                </div>
                <div className="post-content">{post.content}</div>
                <div className="post-actions">
                  <div className="post-like">
                    <img
                      src="https://www.flaticon.com/svg/static/icons/svg/1077/1077035.svg"
                      alt="likes-icon"
                    />
                    <span>{post.likes.length}</span>
                  </div>
                  <div className="post-comments-icon">
                    <img
                      src="https://www.flaticon.com/svg/static/icons/svg/2462/2462719.svg"
                      alt="comments-icon"
                    />
                    <span>{post.comments.length}</span>
                  </div>
                </div>
                <div className="post-comment-box">
                  <input placeholder="Start typing a comment" />
                </div>
                <div className="post-comments-list">
                  <div className="post-comments-item">
                    <div className="post-comment-header">
                      <span className="post-comment-author">Bill</span>
                      <span className="post-comment-time">a minute ago</span>
                      <span className="post-comment-likes">22</span>
                    </div>
                    <div className="post-comment-content">Random comment</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

// the type of props this compo will have
PostsList.propTypes = {
  // this contains all the props passed to this compo
  posts: PropTypes.array.isRequired,
};

export default PostsList;
