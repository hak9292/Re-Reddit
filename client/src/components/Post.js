function Post(props) {
    return (

            <div className='post-area h-100'>
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
            </div>

    );
}

export default Post;