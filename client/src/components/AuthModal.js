import './AuthModal.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// import Input from './Input';
import {useState, useContext} from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import AuthModalContext from './AuthModalContext';
import ClickOutHandler from 'react-clickout-handler';
import UserContext from './UserContext';
import config from '../configs';



function AuthModal(props) {
    const [modalType, setModalType] = useState('login');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    

    

    const modalContext = useContext(AuthModalContext);
    const user = useContext(UserContext);

    const visibleClass = modalContext.show !== false ? 'block' : 'hidden';

    if (modalContext.show && modalContext.show !== modalType) {
      setModalType(modalContext.show);
    }

    function register(e) {
      e.preventDefault();
      const data = {email,username,password};
      console.log(process.env.SECRET)
      axios.post(`${config.SERVER_URI}/register`, data, {withCredentials:true})
        .then(() => {
          user.setUser({username});
          props.setModalShow(false);
          setEmail('');
          setPassword('');
          setUsername('');
        });
    }

    function login() {
      const data = {username,password};
      console.log(process.env)
      console.log(config)
      axios.post(`${config.SERVER_URI}/login`, data, {withCredentials:true})
      .then(() => {
        props.setModalShow(false);
        user.setUser({username})
      });
    }

    return (
      <Modal style={{backgroundColor: 'rgba(0,0,0,.6)'}}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ClickOutHandler onClickOut={() => modalContext.setShow(false)}>
          <Modal.Header closeButton >
            {modalType === 'login' && (
              <Modal.Title className='modal-content' id="contained-modal-title-vcenter">
                  Login
              </Modal.Title>
            )}
            {modalType === 'register' && (
              <Modal.Title className='modal-content' id="contained-modal-title-vcenter">
                  Sign Up
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
                <Button variant="primary" type="submit" className='btn-block' style={{backgroundColor: '#BCC0C1', borderColor: '#BCC0C1', color: '#27272A'}} onClick={() =>login()}>
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
                    New to Re-Reddit? <Button style={{backgroundColor: '#030303', borderColor: '#030303', color: '#ED001C'}} onClick={() => modalContext.setShow('register')}  className='my-2'>Sign Up</Button>
                  </div>
              )}
                {modalType === 'register' && (
                  <div>
                    Already have an account? <Button style={{backgroundColor: '#030303', borderColor: '#030303', color: '#ED001C'}} onClick={() => modalContext.setShow('login')}  className='my-2'>Log In</Button>
                  </div>
              )}

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide} style={{backgroundColor: '#BCC0C1', borderColor: '#BCC0C1', color: '#27272A'}}>Close</Button>
          </Modal.Footer>
        </ClickOutHandler>
      </Modal>
    );
  }

export default AuthModal;