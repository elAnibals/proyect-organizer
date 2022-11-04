import React, { useState } from "react";
import "../styles/FramesProyect.css"
import { ActivityList, Backlog } from "./ActivityList";
import { ModalEpic } from "../components/ModalWindows";
import GroupList from "./GroupList";

import { 
    Container,
    Row,
    Badge,
    ProgressBar,
    Button,
    Col,
} from "react-bootstrap";

const FrameProyect = (props) =>{
    const [sprintsNumber, setSprintsNumber] = useState(3)
    const now = 60;
    return(
        <Container fluid> 
            <h2>
                Proyecto1 &nbsp;&nbsp;&nbsp;
                <Button variant="outline-primary" id="add-friend-button">
                    +&nbsp;agregar integrante
                </Button>
            </h2>
            <ProgressBar now={now} label="Progreso" />
            <p></p>
            
            <GroupList number={1}/>
            <GroupList number={2}/>
            <ModalEpic/>
        </Container>
    )
}






export default FrameProyect;