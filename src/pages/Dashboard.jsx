import React from "react";
import Header from "../components/Header";
import {Container} from "react-bootstrap";
import {Kanban} from "../components/FramesProyect"
import "../styles/Dashboar.css"

const Dashboard = () =>{
    return (
        <Container fluid>
            <Header/>
            <div className="frame-container">
                <Kanban/>
            </div>
        </Container>
                
    );
}

export default Dashboard;