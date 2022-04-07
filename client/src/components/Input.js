import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Input () {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Enter Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Button variant="primary" type="submit" className='btn-block' style={{backgroundColor: '#BCC0C1', borderColor: '#BCC0C1', color: '#27272A'}}>
                Log In
            </Button>
        </Form>
    )
}

export default Input;