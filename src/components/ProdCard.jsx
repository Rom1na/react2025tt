import React from 'react';
import './ProdCard.css'
import { Link } from 'react-router-dom';

const ProdCard = ({prod}) => {

  return (
    
      <div className="card">
      
        <div className="content">
          <p className='categoria'>{prod.category}</p>  
          <div className="title">{prod.title}</div>
          <img className="image"src={prod.image}></img>
          <div className="price"> $ {prod.price.toFixed(2)}</div>
         {/*  <div className="description">{description}</div> */}
        </div>
       <Link to={`/producto/${prod.id}`} state={{prod}} className='boton-link'> Más detalles </Link>
          
       
      </div>
    
  );
}


export default ProdCard;
