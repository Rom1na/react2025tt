import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { getData } from '../utils';


const Admin = () => {
    const navigate = useNavigate();

   const handleClickTodos = async () => {
    const categoria ="administrar"
    const productos = await getData(import.meta.env.VITE_productos);
      /* console.log(productos) */
      navigate(`/galeria/${categoria}`, {
        state: { productos, categoria},
      });
    };


  return (
<>

 <div className='cabecera'>Panel de Administración</div>
   
   <div className="cont">
       <Link to={`/formprod/`} className='boton-link'> Agregar producto </Link>
       <button className='boton-link'onClick={handleClickTodos}>Administrar productos</button>
   </div>  



</>


   
  )
}

export default Admin