import React from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap'; 


const Formulario = (props) => {
    
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
            props.sendToSave(data);
            event.target.reset();
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
        <Form onSubmit={handleHandleOnSubmit} className>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Marca</Form.Label>
                <Form.Control type="text" name="marca" placeholder="Ingrese la marca" required/>
                <Form.Label>Colores</Form.Label>
                <Form.Control type="text" name="color" placeholder="Ingrese sus colores" required/>
                <Form.Label>Modelo</Form.Label>
                <Form.Control type="number" name="year" placeholder="Ingrese el año" required/>
                <Form.Label>Enlace</Form.Label>
                <Form.Control type="text" name="url" placeholder="Ingrese una enlace de la imagen" required/>

                <Form.Label>Descripcion</Form.Label>
                <FloatingLabel controlId="floatingTextarea" label="Descripcion" className="mb-3">
                    <Form.Control as="textarea" placeholder="Ingrese una descripción" name="descripcion" required/>
                </FloatingLabel>

            </Form.Group>
            <Button variant="primary" type="submit"> Submit </Button>
        </Form>
    )
}

export default Formulario
