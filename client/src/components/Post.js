import React from 'react';

function Post(props) {
    return (
        <div className="px-6 bg-reddit_dark text-reddit_text">
            <div className="border border-reddit_border bg-reddit_dark-brighter p-2 rounded-md">
                <h5 className="text-reddit_text-darker text-sm mb-1"> Posted by u/{props.author} 5 hours ago</h5>
                <h2 className="text-xl mb-3">{props.title}</h2>
                <div className="text-sm">
                    {props.body}
                </div>
            </div>
        </div>
    );
}

export default Post;