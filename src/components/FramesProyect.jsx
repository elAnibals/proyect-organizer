import React from "react";
import "../styles/FramesProyect.css"
import { 
    Container,
    Row,
    Badge,
    ProgressBar,
    Button,
} from "react-bootstrap";

import { ActivityList, Backlog } from "./ActivityList";
//wenas noshes
export const Kanban = () =>{
    

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
            <Backlog/>
            <ActivityList title="En espera"/>
            <ActivityList title="En proceso"/>
            <ActivityList title="Terminado"/>
        </Row>
        </Container>
    )
}