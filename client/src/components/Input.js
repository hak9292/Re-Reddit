import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Input () {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Enter username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Enter Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
        </Form>
    )
}

export default Input;