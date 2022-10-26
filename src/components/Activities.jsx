import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export const NormalActivity = (props) =>{
    return(
        <ListGroup.Item action onClick={props.func} >
            {props.text}
        </ListGroup.Item>
    );
}

export const Epic = (props) =>{
    return(
        <ListGroup as="ul">
            <ListGroup.Item action onClick={props.func} >
                {props.epicName}
            </ListGroup.Item>
            <ListGroupItem action onClick={props.func}>
                HistoriaChida
            </ListGroupItem>
        </ListGroup>
    );
}