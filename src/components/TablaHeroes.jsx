import React, { useState } from 'react';
import Heroe from './Heroe';
import { Form, Button } from 'react-bootstrap';

export default function TablaHeroes() {

    const [heroes, setHeroes] = useState([]);

    const formularioDefecto = {
        nombre: '',
        edad: 0,
        raza: '',
        email: ''
    }

    const [form, setForm] = useState(formularioDefecto);

    const formSubmit = event => {
        event.preventDefault();
        const paso = heroes.map(item => item);
        paso.push(form);
        setHeroes(paso);
    }

    const manejadorDeCambio = ({ target }) => {
        console.log([target.name], target.value);
        setForm({
            ...form,
            [target.name]: target.value
        });
        console.log(form);
    }


    return (
        <div>
            <div>
                <table>
                    <tbody>
                    <tr><th>Nombre</th><th>Edad</th><th>Raza</th><th>email</th></tr>
                    {
                        heroes.map((item, index) =>
                            <Heroe key={index} heroe={item} index={index} />
                        )
                    }
                    </tbody>
                </table>
            </div>
            <div>
                <Form onSubmit={formSubmit}>
                    <Form.Group>
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control type="text" required name="nombre" onChange={manejadorDeCambio} value={form.nombre}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Edad:</Form.Label>
                        <Form.Control type="text" required name="edad" onChange={manejadorDeCambio} value={form.edad}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Raza</Form.Label>
                        <Form.Control type="text" required name="raza" onChange={manejadorDeCambio} value={form.raza}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" required name="email" onChange={manejadorDeCambio} value={form.email}></Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">Agregar heroe</Button>
                </Form>
            </div>
            </div>
            )
        
}