import React from "react";
import Header from "../components/Header";
import {Container} from "react-bootstrap";
import FrameProyect from "../components/FramesProyect"
import "../styles/Dashboar.css"


const Dashboard = () =>{
    return (
        <div>
            <Header/>
            <div className="frame-container">
                <FrameProyect metodologi="kanban"/>
                
            </div>
        
        </div>
                
    );
}

export default Dashboard;