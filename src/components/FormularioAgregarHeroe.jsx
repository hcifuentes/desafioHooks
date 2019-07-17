import React, { useState } from 'react';

export default function FormularioAgregarHeroe() {

    const formularioDefecto = {
        nombre: '',
        edad: 0,
        raza: '',
        estatura: 0
    }

    const [form, setForm] = useState(formularioDefecto);

    const formSubmit = event => {
        event.preventDefault();
        console.log(event);
        console.log(form)
        
    }

    const manejadorDeCambio = ({target}) => {
        console.log([target.name] ,  target.value);
        setForm({
            ...form,
            [target.name] : target.value
        });
        console.log(form);
    }

    return(
        <form onSubmit={formSubmit}>
            <input type="text" name="nombre" onChange={manejadorDeCambio} value={form.nombre}></input>
            <input type="text" name="edad" onChange={manejadorDeCambio} value={form.edad}></input>
            <input type="text" name="raza" onChange={manejadorDeCambio} value={form.raza}></input>
            <input type="text" name="estatura" onChange={manejadorDeCambio} value={form.estatura}></input>
            <button type="submit">Agregar</button>
        </form>
    )
}