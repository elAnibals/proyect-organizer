import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import "../styles/Login.css"

function Login(){
    return(
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <Card className="login">
                        <Card.Body>
                            <h2>Login</h2>
                            <Card.Text>Plese enter your email and password :)</Card.Text>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <p></p>
                                <Form.Group>
                                    <Form.Control type="Password" placeholder="Password" />
                                </Form.Group>
                                <p></p>
                                <Button variant="primary" type="submit" > Sing in </Button>
                            </Form>
                            <Card.Text>Don't have an account? <a href="google.com">sign up</a></Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Login;