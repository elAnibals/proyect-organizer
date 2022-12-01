import React from "react";
import Header from "../components/Header";
import FrameProyect from "../components/FramesProyect"
import "../styles/Dashboar.css"
const {useState,useEffect} = React;


const Dashboard = () =>{
    
    return (
        <div>
            <div className="frame-container">
                <FrameProyect />
            </div>
        
        </div>
                
    );
}

export default Dashboard;