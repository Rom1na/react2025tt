import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext} from "./carritoContext";

function RutaProtegida({children}){

    const{auth}= useContext(CarritoContext);
    

    if(!auth){
        return <Navigate to="/formulario" replace/>;
    }

    return children;


}

export default RutaProtegida;