import {Link} from "react-router-dom";

function Post(props) {
    return (

            <div className='post-area h-100'>
            <Link to={{pathname:'/comments/'+props._id,state:{commentId:props._id}}}>
                <div className='post-container'>
                    <div className=''>
                        <div className='post-author'>
                            <p> Posted by u/{props.author} 14 hours ago {props.date}</p>
                        </div>
                        <h3 className='post-title'>
                            {props.title}
                        </h3>
                        <div className='post-content'>
                            <p>
                               {props.body}
                            </p>
                        </div>
                    </div>
                </div>
                </Link>
            </div>

    );
}

export default Post;