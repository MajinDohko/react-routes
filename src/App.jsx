//Llamamos lo necesario para inicializar la aplicación y definir las rutas
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Resume from './Resume';
import Projects from './Projects';

//Creamos función que se encargara de llamar a las rutas
function App () {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/resume' element = {<Resume/>}/>
                <Route path='/projects' element = {<Projects />}/>
            </Routes>
        </Router>
    )
}

export default App;