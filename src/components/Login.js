import "./Login.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
    return (
        <div className="login">
            <div className="login-top">
                <h1>Login Section</h1>
            </div>
            <div className="login-bottom">
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
                 We'll never share your email with anyone else.
             </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
             <Form.Control type="password" placeholder="Password" />
             </Form.Group>
            <Button variant="primary" type="submit">
                  Submit
            </Button>
            </Form>

            </div>
            
        </div>
    )
}

export default Login;