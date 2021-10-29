import React from 'react';
import logo from './logo.svg';
import './App.css';
import Micomponente from './components/Micomponente';





function HolaMundo(nombre, edad){
  let presentacion =  <div>
        <h2>Hola soy {nombre}</h2>
        <h3>Soy estudiante de React js Y tengo {edad} años</h3>
      </div>

  return presentacion;
}   

function App() {
  let nombre="Gonzalo Salas";


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hola bienvenido al curso de react de gonzalo salas WEB
        </p>
          {HolaMundo(nombre,25)}

        </header>

        <section className="componentes">

          <Micomponente/>

        </section> 
    </div>
  );
}

export default App;
