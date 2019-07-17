import React from 'react';
import TablaHeroes from '../components/TablaHeroes';
import Menu from './../components/Menu';

export default function Home() {
    return (
        <div>
            <Menu/>
            Aqui va el listado  
            <TablaHeroes/>
        </div>
    )
}