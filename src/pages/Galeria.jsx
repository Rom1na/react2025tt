import React from 'react'
import { useLocation } from "react-router-dom";
import ProdCard from '../components/ProdCard';
import './Galeria.css'

const Galeria = () => {

  const location = useLocation();
  const productos = location.state?.productos || [];
  const categoria = location.state?.categoria || "Sin categoría";
  



  return (

    
    <>

    <h3 style={{textAlign:'center'}}>{categoria}</h3>
    <div className='contenedor' >
      
     {productos?.map((prod) => (
            <ProdCard
              key={prod.id} // Asegurate de tener una key única
              prod={prod}
              /* title={prod.title}
              price={prod.price}
              description={prod.description}
              img={prod.image}
              cat={prod.category} */
            />
          ))}
    
    </div>
    </>
     
      
     
    
   
  )
}

export default Galeria