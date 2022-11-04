import React from "react";
import { Container, Row } from "react-bootstrap";
import { Backlog, ActivityList } from "./ActivityList";


const GroupList = (props) => {
    
    return(
        <div>
            <Container fluid>
            <Row style={{
                    textAlign: "center",
                    borderBottom: "3px  solid #0d6efd"}}>
                <h4>Sprint {props.number}</h4>
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

export default GroupList;