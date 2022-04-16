import { Modal, Button } from 'react-bootstrap';
import './AuthModal.css'
import UserContext from './UserContext';
import AuthModalContext from './AuthModalContext';
import { useState, useEffect } from 'react';
import PostContent from './Post';
import axios from 'axios';
import config from '../configs';

function CommentModal(props) {
    const [comment, setComment] = useState({});

    useEffect(() => {
        console.log(config.SERVER_URI);
        axios.get(`${config.SERVER_URI}/comments/` + props.id)
            .then(response => setComment(response.data));
    }, []);

    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(true);

    return (
        <>
            {console.log(props)}
            <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Post ID: {props.id}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PostContent {...comment} />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default CommentModal;
