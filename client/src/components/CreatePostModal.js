import React, { useState } from 'react';
import { Nav, Modal, Tab, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import config from '../configs';

const CreatePostModal = (props) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function createPost() {
    const data = { title, body };
    axios.post(`${config.SERVER_URI}/comments`, data, { withCredentials: true })
  }
  return (
    <Modal
      {...props}
      size='xl'
      aria-labelledby='create-form-modal'>
      <Tab.Container defaultActiveKey='post'>
        <Modal.Header closeButton>
          <Modal.Title id='create-form-modal'>Create a post
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
                <Form.Group className="mb-2">
                  <Form.Control as="input" placeholder="Title" onChange={e => setTitle(e.target.value)} value={title} />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Control as="textarea" placeholder="Text (optional)" onChange={e => setBody(e.target.value)} value={body} />
                </Form.Group>
              </Form>
              <div className="text-right">
                <Button variant="light">Save Draft</Button>
                <Button variant="secondary" onClick={() => createPost()}>Post</Button>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey='iAndV'>
              <Form>
                <Form.Group className="mb-2">
                  <Form.Control as="input" placeholder="Title" />
                </Form.Group>
                <Form.Group controlId="formFileMultiple" className="mb-2">
                  <Form.Label>Choose image & video files to upload</Form.Label>
                  <Form.Control type="file" multiple />
                </Form.Group>
              </Form>
              <div className="text-right">
                <Button variant="light">Cancel</Button>
                <Button variant="secondary">Post</Button>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey='link'>
              <Form>
                <Form.Group className="mb-2">
                  <Form.Control as="input" placeholder="Title" />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Control as="textarea" placeholder="Url" />
                </Form.Group>
              </Form>
              <div className="text-right">
                <Button variant="light">Save Draft</Button>
                <Button variant="secondary">Post</Button>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey='poll'>
              <Form>
                <Form.Group className="mb-2">
                  <Form.Control as="input" placeholder="Title" />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Control as="textarea" placeholder="Text (optional)" />
                </Form.Group>
                <Form.Control as="input" placeholder="Option 1" className='mb-1' />
                <Form.Control as="input" placeholder="Option 2" />
              </Form>
              <div className="text-right mt-3">
                <Button variant="light">Cancel</Button>
                <Button variant="secondary">Post</Button>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Modal.Body>
      </Tab.Container>
    </Modal>
  );
};

export default CreatePostModal;
