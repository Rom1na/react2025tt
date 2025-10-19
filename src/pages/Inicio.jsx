import React from 'react'
import './Inicio.css'
import DropDown from '../components/DropDown'
import { CarritoContext, } from '../components/carritoContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import'./Carrito.css'
const Inicio = ({url}) => {

  const {user} = useContext(CarritoContext);


  return (
    <>
    
    <div className='wra'>

     
      
      
     {user ?(
            <p className='Titu'>Hola {user}, estas en la tienda virtual</p>
                 
    
      ):(
       
            <p className='Titu'> Hola, estas en  la tienda virtual</p> 
      )}
    
    

  

    <p className='textoIntro'>Visita nuestro catálogo a través de las siguientes opciones</p>
   
     <div className='contenedorInicio'>
     <DropDown url={url}/>


     {user && <Link to ='/carrito' className='LL'> O  visita tu Carrito</Link>}
   
   
    </div>
    </div>
    

    </>
  )
}

export default Inicio