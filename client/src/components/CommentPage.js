import {useState,useEffect} from "react";
import axios from "axios";
import Post from './Post'
import config from '../configs'


function CommentPage(props) {

  const commentId = props.match.params.id;
  const [ comment, setComment ] = useState({});

  useEffect(() => {
    axios.get(`${config.SERVER_URI}/comments/`+commentId)
    .then(response => setComment(response.data));
  }, []);


  return (
    <div className="post-area">
    {comment && (
      <Post {...comment} />
    )}
    </div>
  );
}
export default CommentPage;