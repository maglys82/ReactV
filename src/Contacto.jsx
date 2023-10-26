import React from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Contacto() {


  return (
    <>
      <div>
        <h1 className="bodysecundario">Cuentanos, ¿en que te podemos Ayudar?</h1>

        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Correo:</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
      </Form>
      <Button variant="danger">Enviar</Button>{' '}

      </div>


    </>
  )
}

export default Contacto
