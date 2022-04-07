import './AuthModal.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from 'react-bootstrap/FormControl';
import Input from './Input';

// function AuthModal(props) {
//     return (
//         <div className='w-screen h-screen absolute top-0 left-0 z-20 flex' style={{backgroundColor: 'rgba(0,0,0,.6)'}}>
//             <div className='modal-content p-5 mx-4 flex self-center'>
//                 MODAL CONTENT
//             </div>
//         </div>
//     )
// }


function AuthModal(props) {
    return (
      <Modal style={{backgroundColor: 'rgba(0,0,0,.6)'}}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton >
          <Modal.Title className='modal-content' id="contained-modal-title-vcenter">
            Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-content'>
           <Input />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default AuthModal;