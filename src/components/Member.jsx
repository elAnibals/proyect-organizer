import React from "react";
import { Badge, Button, Col, Form, ListGroup, Row } from "react-bootstrap";

const {useState,useEffect} = React;

const Member = (props) =>{
    let member = props.member;
    const [changing, setChanging]=useState(false);
    const [rol, setRol]=useState("");
    const onChange = (evt) =>{
        
    }

    const changeRolClick = (evt) =>{
        setChanging(true);
    }

    const aceptRolClick = (evt) =>{
        setChanging(false)
    }

    return(
        <div>
            <ListGroup.Item>
                <Row>
                    <Col>
                        {member.name}
                    </Col>
                    <Col>
                        {  changing ?
                            <Form className="d-flex">
                                <Form.Select>
                                    <option>Scrum Master</option>
                                    <option>Product Owner</option>
                                    <option>Tester</option>
                                    <option>Desarrollador</option>
                                </Form.Select>
                                &nbsp;
                                <Button 
                                    onClick={aceptRolClick}
                                    variant="outline-success"
                                >
                                    <i className="bi bi-check2"></i>
                                </Button >
                            </Form>
                            :
                            <Badge>{member.rol}</Badge>
                        }
                    </Col>
                    <Col >
                        <Button 
                            variant="outline-warning" 
                            onClick={changeRolClick}
                        >
                            <i class="bi bi-pencil"></i>
                        </Button>
                        &nbsp;
                        <Button variant="outline-danger">
                            <i className="bi bi-trash"></i>
                        </Button>
                    </Col>
                </Row>
            </ListGroup.Item>
        </div>
    );
}

export default Member;