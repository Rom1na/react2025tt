import React from 'react';
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext} from "./carritoContext";



const RutaAdmin = ({children}) => {
  
  const{user}= useContext(CarritoContext);
      
  
      if(!user.admin){
          return <Navigate to="/formulario" replace/>;
      }
  
      return children;
}

export default RutaAdmin