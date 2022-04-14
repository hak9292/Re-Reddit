import Post from './Post';
import { useState, useEffect } from "react";
import axios from 'axios';
import config from '../configs'


function PostsListing() {

  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`${config.SERVER_URI}/comments`, {
      withCredentials: true
    })
      .then(response => setComments(response.data));
  }, []);
  
  return (
    <div className="post-area">
      {comments.map(comment => (
        <Post {...comment} />
      ))}
    </div>
  );
}
export default PostsListing;