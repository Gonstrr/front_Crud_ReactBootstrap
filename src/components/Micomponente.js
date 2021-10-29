import React, {Component} from "react";

class Micomponente extends Component{

    render(){

        let receta = {
            nombre:'pizza',
            ingredientes:['Tomate','Queso', 'Jamon Cocinado'],
            calorias: 400
        };

        return(
            <div className="mi-componente">
                <h1>{'la receta es :' + receta.nombre } </h1>
                <h2>{'las calorias que contiene es: ' + receta.calorias} </h2>
            </div>

        )
    }
}

export default Micomponente;