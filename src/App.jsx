/* eslint-disable array-callback-return */
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';

function App() {

  /* Data que nos permite tener nuestros  valores en la interfaz de usuario */
  const DataEmployes = [
    { id: 1, nombre: "Enrique mora ", Role: "tens" },
    { id: 2, nombre: "Bastian salinas", Role: "kinesiologo" },
    { id: 3, nombre: "Colomba fuenzalida", Role: "tens "},
    { id: 4, nombre: "Fernanda ", Role: "emfermera" },
    { id: 5, nombre: "Rolando", Role: "emfermero" },
    { id: 6, nombre: "Jose", Role: "tens" },
    { id: 7, nombre: "gervasio", Role: "portero" },
    { id: 8, nombre: "Macarena", Role: "aux aseo" },
    { id: 9, nombre: "Carlos", Role: "electrico" },
    { id: 10, nombre: "Claudio", Role: "electronico" },
  ];

    /*HOOKS UTILIZADOS EN MI APLICACION */
  /*constante que permite extraer la data principal de nuestro crud */
  const [data, setData] = useState(DataEmployes);

  /* constante que controla los modales con el valor falso para que se mantenga cerrada hasta que se lo indiquemos nosotros */
  const [modalEditar, setModalEditar] = useState(false);

  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);

  /* Este objeto nos permite transformar los datos de la data ingresada, en donde se llama esta funcion en el boton editar*/
  const [nombreSelecionado, setnombreSeleccionado] = useState({
    id: '',
    nombre: '',
    Role: ''
  });

  /*Funcion que me permite ejecutar y seleccionar un nombre dentro de la data insertada */
  const seleccionarName=(elemento, caso)=>{
    setnombreSeleccionado(elemento);
(caso==='Editar')?setModalEditar(true):setModalEliminar(true)
  }

  const handleChange=e=>{
    const {name, value}=e.target;
    setnombreSeleccionado((prevState)=>({
      ...prevState,
      [name]: value
    }));
    //console.log(setnombreSeleccionado);
  }


  // Editar la data o lo que el usurio halla creado.  con la funcion map recorremos y creamos un nuevo arreglo para modificar lo ingresado.
  //tambien se ingresa y se crea con setdata una variable para el estado y cerramos el modal con el setmodaleditar en false.
  //esta funcion esta incluida en nuestras ventanas modales que generamos... 

  const editar =()=>{
    var dataNueva=data;
    dataNueva.map(nameingre=>{
      if(nameingre.id===nombreSelecionado.id){
        nameingre.Role=nombreSelecionado.Role;
        nameingre.nombre=nombreSelecionado.nombre;
      }
    });
    setData(dataNueva);
    setModalEditar(false);
  }
  //funcion que es otra ventana modal de verificacion para el usuario por temas de seguridad se creo esta funcion en caso de equivocacion 
  //se ejecuta esta ventana modal para verificar si el usuario quiere o no eliminar al participante 
  const eliminar =()=>{
    setData(data.filter(nameingre=>nameingre.id!==nombreSelecionado.id));
    setModalEliminar(false);
  }

  const abrirModalInsertar=()=>{
    setnombreSeleccionado(null);
    setModalInsertar(true);
  }

  /* Se registra la funcion insertar para el btn y abrira su ventana modal */
  const insertar =()=>{
    var valorInsertar=nombreSelecionado;
      valorInsertar.id=data[data.length-1].id+1;
    var dataNueva = data;
      dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);
  }

  //insertando estilos a los cuadros.
  const styleCuadros = {
    container:{
      backgroundColor: '#8bc34a',
      borderRadius: '3px 3px 3px 4px',
      border:''
    }
  }

  const stylosApp={
    root:{
      margin:'10px',
    }
  }

  const stylesbtnAcciones={
    container:{
      margin:'3px'
    }
  }

  return (
    <div className="App" style={stylosApp.root}> 
      <br />
      <h3>en este apartado va a ir nuestro appbar</h3>
      <br />
    <button variant="primary" size="lg" className="btn btn-success" onClick={()=>abrirModalInsertar()}>Insertar a un participante </button>
    <br /><br />
      <table className="table table-bordered" >
        <thead>
          {/* En este apartado se reflejan los titulos utilizados */}
          <tr>
            <th style={styleCuadros.container}>ID</th>
            <th style={styleCuadros.container}>Nombre Integrante</th>
            <th style={styleCuadros.container}>Rol integrante</th>
            <th style={styleCuadros.container}>Acciones </th>
          </tr>
        </thead>
        <tbody>
          {data.map(elemento=>(
            <tr>
              <td>{elemento.id}</td>
              <td>{elemento.nombre}</td>
              <td>{elemento.Role}</td>
              <td><button style={stylesbtnAcciones.container} className="btn btn-primary" onClick={()=>seleccionarName(elemento, 'Editar')}> Editar</button> {"   "} 
              <button className="btn btn-danger" onClick={()=>seleccionarName(elemento, 'Eliminar')}> Eliminar</button></td>
            </tr>
          ))
          }
        </tbody>
      </table>
          {/*En este apartado se realizaron las ventanas modales para los botones disponibles en la interfaz  */}
      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar Integrantes</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={nombreSelecionado && nombreSelecionado.id}
            />
            <br />
            <label>Integrante</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value={nombreSelecionado && nombreSelecionado.nombre}
              onChange={handleChange}
            />
            <br />
            <label> Rol </label>
            <input
              className="form-control"
              type="text"
              name="Role"
              value={nombreSelecionado && nombreSelecionado.Role}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={()=>editar()}>
            Actualizar
          </button>
          <button
            className="btn btn-danger"
            onClick={()=>setModalEditar(false)}>
            Cancelar
          </button>
        </ModalFooter>
      </Modal>


      <Modal isOpen={modalEliminar}>

          {/* Para una mejor experiencia de usuario se crea una ventana modal en donde se verifica cual es el usuario que va a eliminar */}
        <ModalBody>
          Estás Seguro que deseas eliminar al participante {nombreSelecionado && nombreSelecionado.nombre}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={()=>eliminar()}>
            Sí
          </button>
          <button
            className="btn btn-secondary"
            onClick={()=>setModalEliminar(false)}>
            No
          </button>
        </ModalFooter>
      </Modal>

        
        <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Insertar Participante</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={data[data.length-1].id+1}
            />
            <br />

            <label>Nombre Nuevo Integrante: </label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value={nombreSelecionado ? nombreSelecionado.nombre: ''}
              onChange={handleChange}
            />
            <br />

            <label>Rol que cumplira:  </label>
            <input
              className="form-control"
              type="text"
              name="Role"
              value={nombreSelecionado ? nombreSelecionado.Role: ''}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary"
          onClick={()=>insertar()}>
            Insertar participante 
          </button>
          <button
            className="btn btn-danger"
            onClick={()=>setModalInsertar(false)}>
            Cancelar ingreso
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default App;