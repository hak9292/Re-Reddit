import Modal from 'react-bootstrap/Modal';
import './AuthModal.css'
import UserContext from './UserContext';
import AuthModalContext from './AuthModalContext';
import { useState, useContext } from 'react';
function PostModal(props) {
    const visibleClass = 'block';
    return (
        <div>
            <Modal style={{ backgroundColor: 'rgba(0,0,0,.6)' }}
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className={visibleClass}
            >

            </Modal>
        </div>
    );
}

export default PostModal;