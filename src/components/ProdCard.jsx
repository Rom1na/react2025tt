import React from 'react';
import './ProdCard.css'
import { Link } from 'react-router-dom';
import { CarritoContext } from './carritoContext';
import { useContext } from 'react';


const ProdCard = ({prod}) => {
  const{user,eliminarProducto}= useContext(CarritoContext);


  function handleDelete(id){
      const confirmar = window.confirm('Confirma la  de eliminación este producto');
       if (confirmar){

        eliminarProducto(id)
    
       }  

      }

  return (
    
      <div className="card">
      
        <div className="content">
          <p className='categoria'>{prod.category}</p>  
          <div className="title">{prod.title}</div>
          <img className="image"src={prod.image  || "/no_img.png"}></img>
          <div className="price"> $ {prod.price.toFixed(2)}</div>
         {/*  <div className="description">{description}</div> */}
        </div>
      

      {!user.admin&&<Link to={`/producto/${prod.id}`} state={{prod}} className='boton-link'> Más detalles </Link>}

       


      {user.admin&& <div className="contbtn">
       <Link to={`/formprod`} state={{prod}} className='boton-link--verde'>Modificar </Link>
       <Link to={`/admin`} onClick={()=>handleDelete(prod.id)} className='boton-link--rojo' >Eliminar</Link>
      </div>    
           }
       
      </div>
    
  );
}


export default ProdCard;
