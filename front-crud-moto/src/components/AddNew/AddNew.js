import React from 'react';
import { Popover, Button} from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Formulario from '../Formulario/Formulario';

const AddNew = (props) => {


    return (
        <div className="btn-new">
            <OverlayTrigger trigger="click" key="top" placement="top" className="btn"
                overlay={
                    <Popover id={"popover-positioned-top"}>
                    <Popover.Header as="h3">REGISTRAR UNA NUEVA MOTO</Popover.Header>
                    <Popover.Body>
                        <p><strong>Formulario de regisro</strong></p>
                        <Formulario sendToSave={props.sendToSave}/>
                    </Popover.Body>
                    </Popover> }
                >
                    <Button variant="secondary">ADD MOTO</Button>

                </OverlayTrigger>
        </div>
    )
}

export default AddNew
