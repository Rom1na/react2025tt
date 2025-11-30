import { useState, useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import { getData } from "../utils";


function AltaProducto() {
  const navigate = useNavigate();
  const location = useLocation();
  const productoRecibido =location.state?.prod;
  const modo = productoRecibido ? "editar": "agregar";
  
  
  const [form, setForm] = useState({
    /* id random alfanumérico base 36 - mockapi genera id autoincremental- lo dejé comentado por si es necesario más adelante */
     /*  id: Math.random().toString(36).substring(2, 8), */
      title: productoRecibido?.title || "",
      description: productoRecibido?.description || "",
      price: productoRecibido?.price || "",
      category: productoRecibido?.category || "",
      image: productoRecibido?.image || ""
      });

  const[errores,setErrores] = useState({});




  const agregarProd = async (form) =>
    {

        try{

           const respuesta = await fetch(import.meta.env.VITE_productos,{ 
                method: 'POST', 
                headers: { 
                    'Content-Type': 'application/json', 
                }, 
                body: JSON.stringify(form), 
                }); 
                if (!respuesta.ok) { 
                throw new Error('Error al agregar el producto.'); 
                } 
                const data = await respuesta.json(); 
                console.log('Producto agregado:', data); 
                alert('Producto agregado exitosamente');
                navigate(`/admin`) 

            } catch (error) { 
                console.error(error.message); 
                alert('Hubo un problema al agregar el producto.'); 
            }


        }

const modificarProd = async (form,id) =>


    {

      const endpoint = import.meta.env.VITE_productos;
      const url =`${endpoint}/${id}`;     
      console.log(url)


        try{

           const respuesta = await fetch(url,{ 
                method: 'PUT', 
                headers: { 
                    'Content-Type': 'application/json', 
                }, 
                body: JSON.stringify(form), 
                }); 
                if (!respuesta.ok) { 
                throw new Error('Error al modificar el producto.'); 
                } 
                const data = await respuesta.json(); 
                console.log('Producto modificado:', data); 
                alert('Producto modificado exitosamente'); 
                navigate(`/admin`)
            } catch (error) { 
                console.error(error.message); 
                alert('Hubo un problema al modificar el producto.'); 
            }


        }


    


 /* 
 
 VERSION ORIGINAL
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    console.log(form)
  }; */



/* VERSION CONTROL VALOR NUMERICO */  
 const handleChange = (e) => {
  const { name, value } = e.target;

  setForm((prev) => ({
    ...prev,
    [name]: name === "price"
      ? value === "" ? "" : parseFloat(value)
      : value
  }));

};








  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Producto enviado:", form);
     if (validarFormulario()){

      if (modo === 'agregar'){
       agregarProd(form);
      }
       if (modo === 'editar'){
       modificarProd(form,productoRecibido.id);
      }
    


       setForm([]);
       setErrores([]);
    
    }
    
    
  };


  const validarFormulario = () => { 
       
        const nuevosErrores = {}; 
        
        
        if (!form.price || form.price <= 0) { 
            nuevosErrores.precio = 'El precio debe ser mayor a 0.'; 
        } 
        if (!form.description.trim() || form.description.length < 10) 
        { 
            nuevosErrores.descripcion = 'La descripción debe tener al menos 10 caracteres.'; 
        } 




        
        setErrores(nuevosErrores); 
        return Object.keys(nuevosErrores).length === 0; 
        }; 
 





  return (
    <form onSubmit={handleSubmit}>
        <div className='Cont-gral2'>

      <label>Título:</label>
      <input
        type="text"
        name="title"
        value={form.title}
        onChange={handleChange}
        required
        

      />
       
      <label>Descripción (máx. 200 caracteres):</label>
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        maxLength={200}
        rows={4}
        required
      />

       {errores.descripcion && (
          <p style={{ color: 'red', margin: '5px 0', fontSize: '14px' }}>{errores.descripcion}</p>
        )}

    

      <label>Precio:</label>
      <input
        type="number"
        name="price"
        value={form.price}
        onChange={handleChange}
        min={0}
        step="0.01"
        required
      />

       {errores.precio && (
          <p style={{ color: 'red', margin: '5px 0', fontSize: '14px' }}>{errores.precio}</p>
        )}
        

      <label>Categoría:</label>
      <select
        name="category"
        value={form.category}
        onChange={handleChange}
        required
      >
        <option value="">Seleccionar</option>
        <option value="menswear">Indumentaria Masculina</option>
        <option value="women's clothing">Indumentaria Femenina</option>
        <option value="jewelery">Joyeria</option>
        <option value="electronics">Electrónica</option>
      </select>

      <label>Imagen (URL):</label>
      <input
        type="url"
        name="image"
        value={form.image}
        onChange={handleChange}
        required
      />

     

     


      {modo ==="editar"&&(
        <button type="submit" className="boton-link">Editar producto</button>

      )}

        {modo ==="agregar"&&(
        <button type="submit" className="boton-link">Cargar producto</button>

      )}

     
      </div>
    </form>


  );
}

export default AltaProducto;