import React from "react";
import { 
    ListGroup, 
    Accordion,
    Button,
    Container, 
} from "react-bootstrap";

export const NormalActivity = (props) =>{
    return(
        <ListGroup.Item action onClick={props.func} >
            {props.text}
        </ListGroup.Item>
    );
}

export const Epic = (props) =>{
  return(
    <Accordion.Item eventKey="0">
        <Accordion.Header>
            {props.epicName} &nbsp;
        </Accordion.Header>
        <Accordion.Body>
            <ListGroup>
                <ListGroup.Item action>
                    historia 1
                </ListGroup.Item>
            </ListGroup>
            <p></p>
            <Container>
                <Button variant="primary" className="rounded-circle">+</Button>
            </Container>
        </Accordion.Body>
    </Accordion.Item>
  );
}

const History = (props) =>{

}
