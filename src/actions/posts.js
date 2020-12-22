import { UPDATE_POSTS } from './actionTypes';

export function fetchPosts() {
  return (dispatch) => {
    const url = 'http://codeial.com:8000/api/v2/posts?page=1&limit=5';
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('data', data);
        // to add to store
        dispatch(updatePosts(data.data.posts));
      });
  };
}

// action creater
export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}
