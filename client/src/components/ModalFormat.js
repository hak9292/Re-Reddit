import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab, Row, Col, Form, Button } from 'react-bootstrap';
// import SignUpForm from './SignupForm';
// import LoginForm from './LoginForm';

// import Auth from '../utils/auth';

const ModalFormat = (props) => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);
  const [comment, setComment] = useState({});

  return (
    <>
      <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
      {/* set modal data up */}
      <Modal
        size='xl'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='post'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>Create a post
              <Nav variant='dark'>
                <Nav.Item>
                  <Nav.Link eventKey='post' className='createPostTitle'>Post</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='iAndV' className='createPostTitle'>Images & Video</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='link' className='createPostTitle'>Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='poll' className='createPostTitle'>Poll</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='Talk' className='createPostTitle'>Talk</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='post'>
                <Form>
                  <Form.Group className="mb-3">
                    {/* <Form.Label>
                    </Form.Label> */}
                    <Form.Control as="input" placeholder="Title" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    {/* <Form.Label>
                    </Form.Label> */}
                    <Form.Control as="textarea" placeholder="Text (optional)" />
                  </Form.Group>
                </Form>
                <Button variant="light">Save Draft</Button>
                <Button variant="secondary">Post</Button>
              </Tab.Pane>
              <Tab.Pane eventKey='iAndV'>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control as="input" placeholder="Title" />
                  </Form.Group>
                  <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Label>Choose image & video files to upload</Form.Label>
                    <Form.Control type="file" multiple />
                  </Form.Group>
                </Form>
                <Button variant="light">Cancel</Button>
                <Button variant="secondary">Post</Button>
              </Tab.Pane>
              <Tab.Pane eventKey='link'>
                <Form>
                  <Form.Group className="mb-3">
                    {/* <Form.Label>
                    </Form.Label> */}
                    <Form.Control as="input" placeholder="Title" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    {/* <Form.Label>
                    </Form.Label> */}
                    <Form.Control as="textarea" placeholder="Url" />
                  </Form.Group>
                </Form>
                <Button variant="light">Save Draft</Button>
                <Button variant="secondary">Post</Button>
              </Tab.Pane>
              <Tab.Pane eventKey='poll'>
                <Form>
                  <Form.Group className="mb-3">
                    {/* <Form.Label>
                    </Form.Label> */}
                    <Form.Control as="input" placeholder="Title" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    {/* <Form.Label>
                    </Form.Label> */}
                    <Form.Control as="textarea" placeholder="Text (optional)" />
                  </Form.Group>
                  <Form.Control as="input" placeholder="Option 1" />
                  <Form.Control as="input" placeholder="Option 2" />
                </Form>
                <Button variant="light">Cancel</Button>
                <Button variant="secondary">Post</Button>
              </Tab.Pane>
            </Tab.Content>
            {/* <Container> */}
            {/* <Row>
                <Col>
                  Post
                </Col>
                <Col>
                  Images & Video
                </Col>
                <Col>
                  Link
                </Col>
                <Col>
                  Poll
                </Col>
                <Col>
                  Talk
                </Col>
              </Row> */}



            {/* Working Code */}

            {/* <Row>
                <Col>
                  <Form>
                    <Form.Group className="mb-3"
                      controlId="formBasicEmail">
                      <Form.Label>
                      </Form.Label>
                      <Form.Control type="email" placeholder="Title" />
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form>
                    <Form.Group className="mb-3"
                      controlId="formBasicEmail">
                      <Form.Label>
                      </Form.Label>
                      <Form.Control type="email" placeholder="Text (optional)" />
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                </Col>
                <Col>
                  <Button variant="primary" type="submit">
                    Save Draft
                  </Button>
                </Col>
                <Col>
                <Button variant="primary" type="submit">
                    Post
                  </Button>
                </Col>
              </Row> */}
            {/* </Container> */}



            {/* <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content> */}
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default ModalFormat;