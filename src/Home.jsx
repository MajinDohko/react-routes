//Creamos el Home
import React from 'react';
import {Link} from 'react-router-dom';

function Home () {
    return (
        <>
            <h1>Información Desarrollador</h1>
            <nav>
                <ul>
                    <li>
                        <Link to={'/resume'}>Experiencia laboral y Títulos</Link>
                    </li>
                    <li>
                        <Link to={'/projects'}>Proyectos y CV</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Home;