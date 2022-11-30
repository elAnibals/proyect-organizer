import React, { useState } from "react";
import "../styles/FramesProyect.css"
import { ActivityList, Backlog } from "./ActivityList";
import { MemebersModal } from "../components/ModalWindows";
import Sprint from "./Sprint";

import { 
    Container,
    ProgressBar,
    Button,
    Row,
} from "react-bootstrap";

const FrameProyect = (props) =>{
    const [sprints, setSprints] = useState([1,2,3,4,5,6,7]);
    const [members, setMembers] = useState([
        {
            "name":"Rubenx",
            "rol": "Product Owner" 
        }, 
        {
            "name":"elAnibals",
            "rol": "Desarrollador" 
        },
        {
            "name":"Fats",
            "rol":"Scrum Master" },
        {
            "name":"David",
            "rol":"Desarrollador" 
        },
        {
            "name":"Malva",
            "rol":"Tester"
        },
    ]);
    const [showMembers, setShowMembers] = useState(false);
    const [repoUrl, setRepoUrl] = useState("https://github.com/");
    const now = 60;

    return(
        <Container fluid> 
            <h2>
                Proyecto1 &nbsp;&nbsp;&nbsp;
                <Button 
                    variant="outline-primary" 
                    id="add-friend-button"
                    onClick={() => setShowMembers(true)}
                >
                    <i class="bi bi-people-fill"></i>
                </Button>&nbsp;&nbsp;&nbsp;
                <a href={repoUrl}><i class="bi bi-github"></i></a>
            </h2>
            <ProgressBar now={now} label="Progreso" />
            <p></p>

            {sprints.map((sprint)=>{
                    return (
                        <Sprint number={sprint}/>          
                    );
            })}
            <Container>
                <p></p>
                <Row>
                    <Button
                        variant="outline-primary"
                    >
                        
                        <i class="bi bi-plus-lg"></i>
                    </Button>
                </Row>
            </Container>
            <MemebersModal 
                show={showMembers}
                onHide={() =>setShowMembers(false)}
                members={members}
            />
        </Container>
        
    )
}






export default FrameProyect;