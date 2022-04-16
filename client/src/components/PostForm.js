import React from 'react';
import './Header.css';
import Avatar from '../assets/default-avatar.webp';
import {useContext, useState} from 'react';
import ModalFormat from './ModalFormat';

function PostForm() {
    const [showModal, setShowModal] = useState(false);

    // function renderModal() {
    //     return(
    //         <ModalFormat>
    //         </ModalFormat>
    //     )
    // }
    const postModal = useContext(ModalFormat);
    return (
        <>
        <ModalFormat
          show={showModal}
          onHide={() => setShowModal(false)}
          setShowModal={setShowModal}
          />
        <div className='post-area'>
            <div className='create-post'>
                <div>
                    <img src={Avatar} className='default-avatar m-2'/>
                </div>
                <div className='w-100'>
                <form action="">
                    <input type="text" className='post-form flex-grow-1 w-100' placeholder='Create Post' onClick={() => {
                        setShowModal(true);
                        console.log('hello')
                    }}></input>
                </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default PostForm;