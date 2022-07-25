import React from 'react';

import { BrowserRouter,Routes , Route , Navigate  } from 'react-router-dom';
import Contactos from './components/layouts/Contactos';
import Informacion from './components/layouts/Informacion';
import Navbar1 from './components/NavBar1';
import Inicio from './components/layouts/Inicio';

import ItemCount from './components/ItemCount';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {} from '@fortawesome/free-solid-svg-icons';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Routes>
              <Route path="/" element={<Navbar1/>}>
                <Route index element={<Inicio />} />
                <Route path="contacto"  element={<Contactos/>}/> 
                <Route path="informacion" element={<Informacion/>}/>

                <Route path='*' element={<Navigate replace to="/"/>} />
              </Route>
        </Routes>
        
        </BrowserRouter>

 
      </header>
      <div className="row">
        <div className="col-4">
          
        </div>
        <div className="col-4">
       
        </div>
        <div className="col-4">

        <ItemCount inicial={1} stock={5}  />
        </div>
      </div>
     
    </div>
  );
}

export default App;
