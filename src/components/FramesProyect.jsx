import React from "react";
import "../styles/FramesProyect.css"
import addFriend from"../assets/add_friend.png"
import { 
    Container,
    Row,
    Col,
    Card,
    Badge,
    ListGroup,
    ProgressBar,
    Button,
} from "react-bootstrap";
//wenas noshes
export const Kanban = () =>{
    const alertClicked = () => {
        alert('You clicked the third ListGroupItem');
    };

    const now = 60;

    return(
        <Container fluid> 
        <h2>
            Proyecto1 &nbsp;&nbsp;&nbsp;
            <Badge pill bg="primary">Kanban</Badge> &nbsp;&nbsp;&nbsp;
            <Button variant="outline-primary" id="add-friend-button">
                +&nbsp;agregar integrante
            </Button>
        </h2>
        
        <ProgressBar now={now} label="Progreso" />
        <p></p>
         <Row>

                <Col>
                    <Card>
                        <Card.Header>BackLog</Card.Header>
                        <Card.Body>
                            <ListGroup as="ul">
                                <ListGroup.Item action onClick={alertClicked}>
                                    Actividad
                                </ListGroup.Item>
                                <ListGroup.Item action onClick={alertClicked}>
                                    Actividad
                                </ListGroup.Item>
                                <ListGroup.Item action onClick={alertClicked}>
                                    Actividad
                                </ListGroup.Item>
                                <ListGroup.Item action onClick={alertClicked}>
                                    Actividad
                                </ListGroup.Item>
                                <ListGroup.Item action onClick={alertClicked}>
                                    Actividad
                                </ListGroup.Item>
                                <ListGroup.Item action onClick={alertClicked}>
                                    Actividad
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Header>En espera</Card.Header>
                        <Card.Body>
                            <ListGroup as="ul">
                                <ListGroup.Item action onClick={alertClicked}>
                                    Actividad
                                </ListGroup.Item>
                                <ListGroup.Item action onClick={alertClicked}>
                                    Actividad
                                </ListGroup.Item>
                                <ListGroup.Item action onClick={alertClicked}>
                                    Actividad
                                </ListGroup.Item>
                                <ListGroup.Item action onClick={alertClicked}>
                                    Actividad
                                </ListGroup.Item>
                                <ListGroup.Item action onClick={alertClicked}>
                                    Actividad
                                </ListGroup.Item>
                                <ListGroup.Item action onClick={alertClicked}>
                                    Actividad
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Header>En progreso</Card.Header>
                        <Card.Body>
                            <ListGroup as="ul">
                                <ListGroup.Item action onClick={alertClicked}>
                                    Actividad
                                </ListGroup.Item>
                                <ListGroup.Item action onClick={alertClicked}>
                                    Actividad
                                </ListGroup.Item>
                                <ListGroup.Item action onClick={alertClicked}>
                                    Actividad
                                </ListGroup.Item>
                                <ListGroup.Item action onClick={alertClicked}>
                                    Actividad
                                </ListGroup.Item>
                                <ListGroup.Item action onClick={alertClicked}>
                                    Actividad
                                </ListGroup.Item>
                                <ListGroup.Item action onClick={alertClicked}>
                                    Actividad
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Header>Terminado</Card.Header>
                        <Card.Body>
                            <ListGroup as="ul">
                                <ListGroup.Item action onClick={alertClicked}>
                                    Actividad
                                </ListGroup.Item>
                                <ListGroup.Item action onClick={alertClicked}>
                                    Actividad
                                </ListGroup.Item>
                                <ListGroup.Item action onClick={alertClicked}>
                                    Actividad
                                </ListGroup.Item>
                                <ListGroup.Item action onClick={alertClicked}>
                                    Actividad
                                </ListGroup.Item>
                                <ListGroup.Item action onClick={alertClicked}>
                                    Actividad
                                </ListGroup.Item>
                                <ListGroup.Item action onClick={alertClicked}>
                                    Actividad
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}