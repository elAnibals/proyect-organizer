import React, { useState } from "react";
import "../styles/FramesProyect.css"
import { ActivityList, Backlog } from "./ActivityList";
import { MemebersModal } from "../components/ModalWindows";
import GroupList from "./GroupList";

import { 
    Container,
    ProgressBar,
    Button,
} from "react-bootstrap";

const FrameProyect = (props) =>{
    const [sprints, setSprints] = useState([1,2]);
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
                    Miembros
                </Button>
            </h2>
            <ProgressBar now={now} label="Progreso" />
            <p></p>

            {sprints.map((sprint)=>{
                    return (
                        <GroupList number={sprint}/>          
                    );
                })}

            <MemebersModal 
                show={showMembers}
                onHide={() =>setShowMembers(false)}
                members={members}
            />
        </Container>
        
    )
}






export default FrameProyect;