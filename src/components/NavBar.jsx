import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import CategoriaLink from './CategoriaLink'
import DropDown from './DropDown'
import DropDown2 from './DropDown2'
import { CarritoContext } from '../components/carritoContext';
import { useContext } from 'react'

const NavBar = ({url,datos,setDatos}) => {
  
 const{compra,setCompra}= useContext(CarritoContext);
      

  return (
       <header>
    <h1 className="tituloppal">La tienda online </h1>
    
    <nav>
        <ul>


            <li><Link to ='/nosotros' className='linky'>Nosotros</Link></li>
            <li><DropDown2 compras={compra}/></li>
                
           
            <li><DropDown url={url}/>

                

                </li>
                </ul>
           
    </nav>
        
 </header>


  )
}

export default NavBar