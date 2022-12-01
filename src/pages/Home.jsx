import React from "react";
import { Container, Dropdown, DropdownButton } from "react-bootstrap";
import ProyectCard from "../components/ProyectCard";
import "../styles/Home.css"

const {useState,useEffect} = React;



function Home (props){
    const [proyects, setProyects] = useState([
       {
        "name":"proyecto 1",
        "id": 1,
        "rol":"Tester",
        "status":"en proceso"
       },
       {
        "name":"proyecto 2",
        "id" : 2,
        "rol":"Tester",
        "status":"terminado"
       },
       {
        "name":"proyecto 2",
        "id" : 2,
        "rol":"Tester",
        "status":"terminado"
       },
       {
        "name":"proyecto 2",
        "id" : 2,
        "rol":"Tester",
        "status":"en proceso"
       },
       {
        "name":"proyecto 2",
        "id" : 2,
        "rol":"Tester",
        "status":"en proceso"
       }
    ]);


    return(
        <Container fluid>
            <p></p>
            <div>
                <h2 className="">
                    <DropdownButton size="lg"
                        variant="outline-primary" 
                        title="Proyectos" 
                        id="bg-nested-dropdown"
                    >
                        <Dropdown.Item eventKey="1">Todos los proyectos</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Proyectos creados por ti</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Proyectos invitado</Dropdown.Item>
                        <Dropdown.Item eventKey="4">Proyectos terminados</Dropdown.Item>
                        <Dropdown.Item eventKey="5">Proyectos en proceso</Dropdown.Item>
                    </DropdownButton>
                </h2>
                
            </div>
            <div className="container-proyects">
                {proyects.map((proyect)=>{
                    return(
                        <ProyectCard proyect={proyect}/>
                    );
                })}
            </div>
        </Container>
    );
}

export default Home;