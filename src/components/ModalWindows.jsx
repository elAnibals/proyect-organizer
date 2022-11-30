import React from "react";
import { Modal, Button, ListGroup, Form, Row, Col } from "react-bootstrap";
import Member from "./Member";

const {useState} = React

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
  const [addingMember, setAddingMember] = useState(false);

  const changeToTrue = () =>{
    setAddingMember(true);
  }

  const changeToFalse = () =>{
    setAddingMember(false);
  }

  const addMember = () =>{
    setAddingMember(false);
  }

  return(
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        { addingMember ?
          <div>Agregar Miembro</div>
          :
          <div>Miembros</div>
        }
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        { addingMember ?
          <Form>
            <Row>
              <Col>
                <Form.Control type="search" placeholder="Nombre" />
              </Col>
              <Col>
                <Form.Select>
                  <option>Scrum Master</option>
                  <option>Product Owner</option>
                  <option>Tester</option>
                  <option>Desarrollador</option>
                </Form.Select>
              </Col>
            </Row>
          </Form>
          :
          <ListGroup as="ul">
            {props.members.map((member)=>{
            return (
              <Member member={member}/>
            );
            })} 
          </ListGroup>
        }
      </Modal.Body>
      <Modal.Footer>
        { addingMember ?
        <div>
          <Button
            variant="outline-danger"
            onClick={changeToFalse}
          >
            <i class="bi bi-x"></i>
          </Button>
          &nbsp;
          <Button
            variant="outline-success"
            onClick={addMember}
          >
            <i className="bi bi-check2"></i>
          </Button>
        </div>
          :
        <Button 
          onClick={changeToTrue}
        >
          <i class="bi bi-plus-lg"></i>
        </Button>
        }
        
      </Modal.Footer>
    </Modal>
);
//onhide
}
