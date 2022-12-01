import React from "react";
import { Card, Button, Container } from "react-bootstrap";

const ProyectCard = (props) =>{
    let proyect = props.proyect;
    return(
        <div>
            <Container>
            <p></p>
            <Card style={{width:"18rem"}}>
                <Card.Body className="text-center">
                    <Card.Title>{proyect.name}</Card.Title>
                    <Button variant="outline-primary">Entrar</Button>
                </Card.Body>
            </Card>
        </Container>
        </div>
    );
}

export default ProyectCard;