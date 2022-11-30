import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Backlog, ActivityList } from "./ActivityList";


const Sprint = (props) => {
    
    return(
        <div>
            <Container fluid>
            <Row style={{
                borderBottom: "3px  solid #0d6efd"
            }}>
                <Col></Col>
                <Col style={{
                    textAlign: "center"
                }}>
                    <h4>Sprint {props.number}</h4>
                </Col>
                <Col style={{alignContent:"end"}}>
                    <Button variant="outline-danger"
                    >
                        <i className="bi bi-trash"></i>
                    </Button>
                </Col>
            </Row>
            </Container>
            <p></p>
            <Row>
                <Backlog/>
                <ActivityList title="En espera"/>
                <ActivityList title="En proceso"/>
                <ActivityList title="Terminado"/>
            </Row>
        </div>
    );
}

export default Sprint;