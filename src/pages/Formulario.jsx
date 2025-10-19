import React from 'react'
import { useState,useContext } from 'react'
import './Formulario.css'
import { useNavigate } from 'react-router-dom'
import { CarritoContext } from '../components/carritoContext'
const Formulario = () => {
   
     
     const{auth,setAuth,user,setUser,btn,setBtn,setCompra,syncEnabled,setSyncEnabled,compra}= useContext(CarritoContext);   
     const navigate =useNavigate();

     function manejarEnvio(e){
        e.preventDefault();
        console.log(compra)
         
       if (user!= undefined){ 
        setAuth(true);
        setBtn(`Hola ${user}🔒`);
        setCompra([]);
        navigate('/');
        }else{
          alert ('Por favor, ingresa un nombre')
        }
       
        
     };



  return (
    <>

       <div className='Cont-gral'>

       
        <div className='cabecera'>Ingresa tu nombre para habilitar el carrito</div>
        <form onSubmit={manejarEnvio}>

            <input type="text"
                   value={user || ''}
                   onChange={(e) =>setUser(e.target.value)}
                   placeholder='Ingresa tu nombre'
            
            />


         <button type='submit' className='boton-link'>Enviar</button>

        </form>

       </div>


    </>
    
  )
}

export default Formulario