import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState,useContext,useEffect } from 'react';
import { CarritoContext, } from '../components/carritoContext';
import'./Carrito.css'

const Carrito = () => {

    
    const{compra,setCompra,saveDataToLocalStorage,user,auth,syncEnabled,setSyncEnabled }= useContext(CarritoContext);
    
    
    
    useEffect(() => {
        const dataJson = localStorage.getItem(user);
        setSyncEnabled(true)
        if (dataJson) {
          try {
            const data = JSON.parse(dataJson);
            setCompra(data);
            console.log('Compra recuperada desde localStorage:', data);
          } catch (error) {
            console.error('Error al parsear datos del localStorage:', error);
          }
        }
    }, []);

    
    
        
    
    
    
    useEffect(() => {
      
      if (auth && syncEnabled && compra.length > 0) {
        saveDataToLocalStorage(compra, user);
      }

      if (compra.length === 0){
      localStorage.removeItem(user)
      }



    }, [compra, auth,syncEnabled]);
    
    
    
  
  


  

  const modificarCantidad = (id, delta) => {
    setCompra(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, cantidad: Math.max(1, item.cantidad + delta) }
          : item
      )
    );
   
  };

  const eliminarProducto = (id) => {
    setCompra(prev => prev.filter(item => item.id !== id));
    saveDataToLocalStorage(compra,user)
  
  };

  const vaciarCarrito = () => {
    
    setCompra([]);
    console.log(compra);
    localStorage.removeItem(user)
    
  };

  const totalGeneral = compra.reduce(
    (acc, item) => acc + item.price * item.cantidad,
    0
  );

  const aceptarCompra = () => {

         if (compra && compra.length > 0) {
            alert('¡Compra confirmada!');
            setCompra([]);
            localStorage.removeItem(user)

          } else {
            alert('No hay productos en tu carrito...');
          }
         };
             
            



  return (
    <> 
      
       <div className="carrito">
      {
      
      
      compra && compra.length > 0?(
      compra.map((item) => (
        <div key={item.id} className="carrito-row">
          <div className="carrito-item">
            <img src={item.image} alt={item.title} className="carrito-img" />
            <span className="carrito-nombre">{item.title}</span>
            <span className="carrito-precio">${item.price.toFixed(2)}</span>
            <span className="carrito-cantidad">
              <button onClick={() => modificarCantidad(item.id, -1)}>-</button>
              {item.cantidad}
              <button onClick={() => modificarCantidad(item.id, 1)}>+</button>
            </span>
            <span className="carrito-total">
              ${ (item.price * item.cantidad).toFixed(2) }
            </span>
            <button className="carrito-eliminar" onClick={() => eliminarProducto(item.id)}>🗑️</button>
          </div>
        </div>
      ))
    
      ):(
        <h3>No hay productos en tu carrito</h3>
        
      )
    
    }

      <div className="carrito-footer">
        <span className="carrito-total-general">
          Total: ${totalGeneral.toFixed(2)}
        </span>
        <div className="carrito-footer-buttons">
          <button onClick={aceptarCompra}>Realizar Compra</button>
          <button onClick={vaciarCarrito}>Vaciar carrito</button>
        </div>
      </div>
    </div> 
    
      
      
      	





     
    </>

  )
}

export default Carrito