import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/agregarHeroe"}>Agregar Heroe</Link></li>
        </ul>
    );
}