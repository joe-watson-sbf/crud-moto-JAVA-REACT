import React, {useState} from 'react';
import {Button, Modal, Form, FloatingLabel} from 'react-bootstrap';

const EditForm = (props) => {

    const [show, setShow] = useState(props.edit);

    const handleClose = () => {
        setShow(false);
    }

    const handleHandleOnSubmit= (event)=>{
        event.preventDefault();
        const data = {
            marca: event.target.marca.value,
            color: event.target.color.value,
            modelo: event.target.year.value,
            url: event.target.url.value,
            description: event.target.descripcion.value
        }
        
        if(urlVerification(data.url)){
            //props.sendToSave(data);
            alert("RECIBIDO")
            event.target.reset();
            handleClose();
        }else{
            alert("No se puede guardar los datos...");
        }
        
    }


    const urlVerification=(url)=>{
        if(url.includes(".png") || url.includes(".jpg")){
            return true;
        }else{
            return false;
        }
    }
  
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              
            <Form onSubmit={handleHandleOnSubmit} className>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                
                    <Form.Label>Matricula</Form.Label>
                    <Form.Control type="text" name="matricula" value={props.moto.matricula} placeholder="Ingrese la marca" disabled/>
                    <Form.Label>Marca</Form.Label>
                    <Form.Control type="text" name="marca" value={props.moto.marca} placeholder="Ingrese la marca" required/>
                    <Form.Label>Colores</Form.Label>
                    <Form.Control type="text" name="color" value={props.moto.color} placeholder="Ingrese sus colores" required/>
                    <Form.Label>Modelo</Form.Label>
                    <Form.Control type="number" name="year" value={props.moto.modelo} placeholder="Ingrese el año" required/>
                    <Form.Label>Enlace</Form.Label>
                    <Form.Control type="text" name="url" value={props.moto.url} placeholder="Ingrese una enlace de la imagen" required/>

                    <Form.Label>Descripcion</Form.Label>
                    <FloatingLabel controlId="floatingTextarea" className="m-3">
                        <Form.Control as="textarea" value={props.moto.description} placeholder="Ingrese una descripción" name="descripcion" required/>
                    </FloatingLabel>

                </Form.Group>
                <Button variant="primary" type="submit"> Submit </Button>
            </Form>

          </Modal.Body>
        </Modal>
      </>
    );
}

export default EditForm
