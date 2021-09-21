import React, { useState } from 'react';
import {Row, Col, Card, Button} from 'react-bootstrap';

const List = (props) => {

    const [moto, setMoto] = useState(null);

    const handleDelete=(event)=>{
        const id = +event.target.id
        if(id!==null || id !==undefined){
            props.delete(id);
        }
    }

    const handleEdit = (event)=>{
        const moto = filtrarMoto(+event.target.id);
        console.log("Moto: " , moto);
        setMoto(moto);
    }

    const filtrarMoto=(id)=>{
        const moto = props.motos.filter(moto => moto.matricula===id);
        return moto[0];
    }

    return (
        <div className="list">
            <div className="title">
                <h1>LISTA DE MOTOS</h1>
            </div>
            
            <div className="motos">
                <Row xs={1} md={3} className="g-4">
                    {props.motos.map((moto) => (
                        <Col key={moto.matricula}>
                            <Card className="card">
                                <Card.Img className="images" variant="top" src={moto.url} />
                                <Card.Body>
                                <Card.Title>{moto.marca}</Card.Title>
                                <Card.Text>
                                    {moto.description}
                                </Card.Text>
                                <Card.Text>
                                    <div className="btn">
                                        <Button id={moto.matricula} variant="success" size="sm"
                                            onClick={handleEdit}
                                        >Editar</Button>
                                        <Button id={moto.matricula} variant="danger" size="sm"
                                            onClick={handleDelete}
                                        >Elimiar</Button>
                                    </div>
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted"> <strong>Color: </strong>{moto.color}</small>
                                    <small className="text-muted"> <strong>Año: </strong>{moto.modelo}</small>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            
        </div>
    )
}

export default List
