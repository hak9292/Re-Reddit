import { Modal, Button } from 'react-bootstrap';
import './AuthModal.css'
import UserContext from './UserContext';
import AuthModalContext from './AuthModalContext';
import { useState, useEffect } from 'react';
import PostContent from './Post';
import axios from 'axios';
function CommentModal(props) {
    // const commentId = props.match.params.id;
    const [ comment, setComment ] = useState({});
  
    useEffect(() => {
      axios.get('http://localhost:4000/comments/'+props.id)
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
}

export default CommentModal;

// function Example() {
//     const values = true;
//     const [fullscreen, setFullscreen] = useState(true);
//     const [show, setShow] = useState(false);

//     function handleShow(breakpoint) {
//       setFullscreen(breakpoint);
//       setShow(true);
//     }

//     return (
//       <>
//         {values.map((v, idx) => (
//           <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
//             Full screen
//             {typeof v === 'string' && `below ${v.split('-')[0]}`}
//           </Button>
//         ))}
//         <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
//           <Modal.Header closeButton>
//             <Modal.Title>Modal</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>Modal body content</Modal.Body>
//         </Modal>
//       </>
//     );
//   }

{/* <Modal style={{ backgroundColor: 'rgba(0,0,0,.6)' }}
{...props}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
className={visibleClass}
>

</Modal> */}