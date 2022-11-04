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
                            <Card.Text>Porfa ingresa tu correo y contraseña :)</Card.Text>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <p></p>
                                <Form.Group>
                                    <Form.Control type="Password" placeholder="Password" />
                                </Form.Group>
                                <p></p>
                                <Button variant="primary" type="submit" > Iniciar sesion </Button>
                            </Form>
                            <Card.Text>¿No tienes una cuenta? :( <a href="google.com">Registrarse</a></Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Login;