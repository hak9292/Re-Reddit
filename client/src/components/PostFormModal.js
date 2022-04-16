// import Modal from 'react-bootstrap/Modal';
// import {useState, useContext} from 'react';
// import AuthModalContext from './AuthModalContext';
// import ClickOutHandler from 'react-clickout-handler';
// import UserContext from './UserContext';
// import config from '../configs';
// import Button from 'react-bootstrap/Button';
import { Modal, Button } from 'react-bootstrap';
import './AuthModal.css'
import UserContext from './UserContext';
import AuthModalContext from './AuthModalContext';
import { useState, useEffect } from 'react';
import PostContent from './Post';
import axios from 'axios';
import config from '../configs';

function PostFormModal(props) {
    const [ comment, setComment ] = useState({});
  
    useEffect(() => {
        console.log(config.SERVER_URI);
      axios.get(`${config.SERVER_URI}/comments/`+props.id)
      .then(response => setComment(response.data));
    }, []);
    // const visibleClass = 'block';
    // const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(true);

    // function handleShow(breakpoint) {
    //     setFullscreen(breakpoint);
    //     setShow(true);
    // }
    return (
        <>
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>ID: {props.id}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PostContent {...comment}/>
                </Modal.Body>
            </Modal>
            {/* <Modal.Header closeButton ></Modal.Header>
            <Modal.Title className='modal-content' id="contained-modal-title-vcenter"></Modal.Title> */}
        </>
    );
    // const [modalType, setModalType] = useState('login');
    // const modalContext = useContext(AuthModalContext);
    // const user = useContext(UserContext);
    // // const visibleClass = 'block';
    // const visibleClass = modalContext.show !== false ? 'block' : 'hidden';
    // if (modalContext.show && modalContext.show !== modalType) {
    //     setModalType(modalContext.show);
    //   }
    // return (
    //     <div>
    //         <Modal style={{ backgroundColor: 'rgba(0,0,0,.6)' }}
    //             {...props}
    //             size="lg"
    //             aria-labelledby="contained-modal-title-vcenter"
    //             centered
    //             className={visibleClass}
    //         >
    //             {/* <ClickOutHandler onClickOut={() => {}}> */}
    //             <ClickOutHandler onClickOut={() => modalContext.setShow(false)}>
    //                 <Modal.Header closeButton >
    //                 </Modal.Header>
    //                 <Modal.Footer>
    //         <Button onClick={props.onHide} style={{backgroundColor: '#BCC0C1', borderColor: '#BCC0C1', color: '#27272A'}}>Close</Button>
    //       </Modal.Footer>
    //             </ClickOutHandler>
    //         </Modal>
    //     </div>
    // );
}

export default PostFormModal;

// const visibleClass = modalContext.show !== false ? 'block' : 'hidden';
{/* <ClickOutHandler onClickOut={() => modalContext.setShow(false)}> */}