import React from "react";
import { Col, Card, ListGroup} from "react-bootstrap"
import { NormalActivity ,Epic} from "./Activities";



const alertClicked = () => {
    alert('You clicked the third ListGroupItem');
};

export const ActivityList = (props) => {
    return (
        <Col>
            <Card>
                <Card.Header>{props.title}</Card.Header>
                <Card.Body>
                    <ListGroup as="ul">
                        <NormalActivity func={alertClicked} text="Actividad random"/>
                        
                    </ListGroup>
                </Card.Body>
            </Card>
        </Col>
    );
}

export const Backlog = (props) =>{
    return (
        
        <Col>
            <Card>
                <Card.Header>Backlog</Card.Header>
                <Card.Body>
                    <Epic func={alertClicked} epicName="Epica chida" />
                    <p></p>
                    <Epic func={alertClicked} epicName="Epica 2"/>
                </Card.Body>
            </Card>
        </Col>
    );
}