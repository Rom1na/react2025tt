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
        console.log(user)
         
       if (user.user!= undefined){ 
         setUser({...user,auth: true});
        if (user.user === import.meta.env.VITE_ad){
            setUser({...user,auth: true,admin: true});
         }
        setBtn(`Hola ${user.user}🔒`);
        setCompra([]);
        navigate('/');
        }else{
          alert ('Por favor, ingresa un nombre')
        }
       
        
     };

      const handleChange = (e) => {
         const { name, value } = e.target;
         setUser((prev) => ({ ...prev, [name]: value }));
         console.log(user)
      };    


  return (
    <>

       <div className='Cont-gral'>

       
        <div className='cabecera'>Ingresa tus datos para habilitar el carrito</div>
        <form onSubmit={manejarEnvio}>

            <input type="text"
                   name="user"
                   value={user.user || ''}
                   onChange={handleChange}
                   placeholder='Ingresa tu nombre'
            
            />

            <input type="email"
                   name="email"          
                   value={user.email || ''}
                   onChange={handleChange}
                   placeholder='Ingresa tu e-mail'
            
            />


         <button type='submit' className='boton-link'>Enviar</button>

        </form>

       </div>


    </>
    
  )
}

export default Formulario