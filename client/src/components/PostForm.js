import React from 'react';
import './Header.css';
import Avatar from '../assets/default-avatar.webp';

function Post() {
    return (
        <div className='post-area'>
            <div className='create-post'>
                <div>
                    <img src={Avatar} className='default-avatar m-2'/>
                </div>
                <div className='w-100'>
                <form action="">
                    <input type="text" className='post-form flex-grow-1 w-100' placeholder='Create Post'></input>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Post;