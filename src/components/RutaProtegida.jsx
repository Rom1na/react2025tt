import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext} from "./carritoContext";

function RutaProtegida({children}){

    const{user}= useContext(CarritoContext);
    

    if(!user.auth){
        return <Navigate to="/formulario" replace/>;
    }

    return children;


}

export default RutaProtegida;