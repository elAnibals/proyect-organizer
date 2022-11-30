import React from "react";
import Header from "../components/Header";
import FrameProyect from "../components/FramesProyect"
import "../styles/Dashboar.css"


const Dashboard = () =>{
    return (
        <div>
            <Header/>
            <div className="frame-container">
                <FrameProyect />
                
                
                
            </div>
        
        </div>
                
    );
}

export default Dashboard;