import axios from 'axios';


export const fetchPosts = () => dispatch => {
    
    axios('https://jsonplaceholder.typicode.com/posts')
    .then(result => dispatch({
        type: "FETCH_POSTS",
        payload: result.data
    }))  
    
}
export const createPost = (postData) => dispatch => {
    axios.post('https://jsonplaceholder.typicode.com/posts', postData)
      .then(result => dispatch({
        type: "NEW_POST",
        payload: result.data
      }))
  };
  