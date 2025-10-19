import React, { useContext,useEffect } from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import'./DetalleProducto.css'
import { CarritoContext } from '../components/carritoContext';

const DetalleProducto = () => {

const location = useLocation();
const producto = location.state.prod;
const{setCompra,compra,auth,user,saveDataToLocalStorage,syncEnabled,setSyncEnabled }= useContext(CarritoContext);
const navigate= useNavigate();


console.log(producto)

useEffect(() => {
  if (auth && syncEnabled && compra.length > 0) {
        saveDataToLocalStorage(compra, user);
      }

}, [compra, auth,syncEnabled]);




const handleAgregar = (producto) => {
  if (auth) {
    setCompra(prev => {
      const existe = prev.find(item => item.id === producto.id);
      if (existe) {
        return prev.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        return [...prev, { ...producto, cantidad: 1 }];
      }
    });

    alert(`${producto.title} agregado a tu compra.`);
    
    navigate('/carrito');
  } else {
    alert('Por favor, ingresa para habilitar tu carrito');
    navigate('/carrito');
  }
};



    
  return (
    <>
       <div className='wrapp'>
        <h2 className='nombre' >{producto.title}</h2>
        <img src={producto.image} alt={producto.title} className='imagen'/>
        <p className='descripcion'>{producto.description}</p>
        <p className='precio'>$ {producto.price.toFixed(2)}</p>
        <button className='btnCompra' onClick={()=>handleAgregar(producto)}>Agregar a mi compra</button>


        
        
        </div>

        
    
    </>
    
    
   
  )
}

export default DetalleProducto