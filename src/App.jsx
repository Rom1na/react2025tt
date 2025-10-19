import { useState,useContext } from 'react'
import './App.css'

import ProdCard from './components/ProdCard'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Inicio from './pages/Inicio'
import {Routes,Route} from 'react-router-dom'
import { getData } from './utils'
import Nosotros from './pages/Nosotros'
import Galeria from './pages/Galeria'
import DetalleProducto from './pages/DetalleProducto'
import Carrito from './pages/carrito'
import Formulario from './pages/Formulario'
import RutaProtegida from './components/RutaProtegida'
import { CarritoContext } from './components/carritoContext'


function App() {
  const [datos, setDatos] = useState([])
  const{auth,setAuth}= useContext(CarritoContext);     


  const url={
    E :"https://fakestoreapi.com/products/category/electronics",
    W :"https://fakestoreapi.com/products/category/women's%20clothing",
    J :"https://fakestoreapi.com/products/category/jewelery",
    M :"https://fakestoreapi.com/products/category/men's%20clothing",
    T : "https://fakestoreapi.com/products",
  }




  return (
    <>
     
   <NavBar url={url} datos={datos} setDatos={setDatos}/>
   
    
   <Routes>

    

      <Route path='/nosotros' element={<Nosotros/>}/>
      <Route path='/' element={<Inicio url={url}/>}/>
      <Route path='/galeria/:categoria' element={<Galeria/>}/> 
      <Route path='/producto/:id' element={<DetalleProducto/>}/> 
      <Route path='/carrito' element={
      <RutaProtegida>
      <Carrito/>
      </RutaProtegida>}/>
      <Route path='/galeria' element={<Galeria/>}/> 
      <Route path='/formulario' element={<Formulario/>}/> 


    
   </Routes>
   
    <Footer/>
      
       
    </>
  )
}



export default App
