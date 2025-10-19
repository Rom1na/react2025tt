import React from 'react'
import'./Nosotros.css'
import shop from'../assets/shop400X276.jpg'

const Nosotros = () => {
  return (

    <>
    <div className='cont'>
    <div className='cabecera' >Somos la tienda onLine</div>

    <img src={shop} className='ima' alt="Tienda" />

    <p className='texto'>Una empresa con más de 20 años de experiencia, pionera en comercio electrónico, brindando soluciones de calidad para nuestros clientes y un distinguido canal de distribución para nuestros proveedores</p>



    <p className="texto">Visitanos en el Obelisco, uno de los lugares más emblemáticos de nuestro país. <br/>Av. 9 de Julio s/n, C1043 Cdad. Autónoma de Buenos Aires </p>
                
    


    </div>

     
             

    

    </>


  )
}

export default Nosotros