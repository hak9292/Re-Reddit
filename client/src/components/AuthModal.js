import './AuthModal.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from 'react-bootstrap/FormControl';
import Input from './Input';
import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

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
    const [modalType, setModalType] = useState('login');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const visibleClass = props.show ? 'block' : 'hidden';
    // if (modalContext.show && modalContext.show !== modalType) {
    //   setModalType(modalContext.show);
    // }

    // const modalContext = useContext(AuthModalContext);
    // const user = useContext(UserContext);

    function register(e) {
      e.preventDefault();
      const data = {email,username,password};
      axios.post('http://localhost:4000/register', data, {withCredentials:true});
        // .then(() => {
        //   user.setUser({username});
        //   modalContext.setShow(false);
        //   setEmail('');
        //   setPassword('');
        //   setUsername('');
        // });
    }

    return (
      <Modal style={{backgroundColor: 'rgba(0,0,0,.6)'}}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={visibleClass}
      >
        <Modal.Header closeButton >
          {modalType === 'login' && (
            <Modal.Title className='modal-content' id="contained-modal-title-vcenter">
                Login
            </Modal.Title>
          )}
          {modalType === 'register' && (
            <Modal.Title className='modal-content' id="contained-modal-title-vcenter">
                Register
            </Modal.Title>
          )}
        </Modal.Header>
        <Modal.Body className='modal-content'>
           {modalType === 'register' && (
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
              </Form.Group>
           )}
           {/* <Input /> */}

            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Enter Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} />
            </Form.Group>

            {modalType === "login" && (
              <Button variant="primary" type="submit" className='btn-block' style={{backgroundColor: '#BCC0C1', borderColor: '#BCC0C1', color: '#27272A'}}>
                Log In
              </Button>
            )}

            {modalType === "register" && (
              <Button variant="primary" type="submit" className='btn-block' style={{backgroundColor: '#BCC0C1', borderColor: '#BCC0C1', color: '#27272A'}} onClick={e => register(e)} >
                Sign Up
              </Button>
            )} 

            {/* set state to 'register' if the sign up button is clicked */}
            {modalType === 'login' && (
                <div>
                  New to Reddit? <Button style={{backgroundColor: '#030303', borderColor: '#030303', color: '#ED001C'}} onClick={() => setModalType('register')}  className='my-2'>Sign Up</Button>
                </div>
            )}
              {modalType === 'register' && (
                <div>
                  Already have an account? <Button style={{backgroundColor: '#030303', borderColor: '#030303', color: '#ED001C'}} onClick={() => setModalType('login')}  className='my-2'>Log In</Button>
                </div>
            )}

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} style={{backgroundColor: '#BCC0C1', borderColor: '#BCC0C1', color: '#27272A'}}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default AuthModal;