import React from "react";
import { Modal, Button, ListGroup, ListGroupItem } from "react-bootstrap";

export const ModalEpic = (props) =>{
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export const MemebersModal = (props) =>{
  return(
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Miembros
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup as="ul">
         {props.members.map((member)=>{
                    return (
                        <ListGroup.Item>{
                          member.name+" "+"("+member.rol+")"
                          }</ListGroup.Item>
                    );
                })} 
                
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Agregar</Button>
      </Modal.Footer>
    </Modal>
  );
}
