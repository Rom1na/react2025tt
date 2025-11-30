import { createContext,useActionState, useState,useEffect } from "react";


export const CarritoContext = createContext();
export const CarritoProvider = ({children}) =>{
        const [compra,setCompra] = useState([]);
        
                // auth persistido
       

        // user persistido
        const [user, setUser] = useState(() => {
            const savedUser = localStorage.getItem("user");
            return savedUser ? JSON.parse(savedUser) : { 
                user: "",
                email: "",
                auth : false,
                admin: false };
        });

      
        // sincronizar user
        useEffect(() => {
            if (user && user.email) {
            localStorage.setItem("user", JSON.stringify(user));
            } else {
            localStorage.removeItem("user");
            }
        }, [user]);

        
                
                 
        const [btn, setBtn] = useState('Ingresa!');
        const [syncEnabled, setSyncEnabled] = useState(true);
        


        
        
        function logOut(){
            
            setBtn('Ingresa!');
            setUser('');
            setUser('');

           /*  localStorage.removeItem("auth"); */
            localStorage.removeItem("user");
            setSyncEnabled(false)
            
                        
            
        }


        







        

    //CRUD

     const eliminarProducto = async (id) =>{

     
       const endpoint = import.meta.env.VITE_productos;
       const url =`${endpoint}/${id}`;     
       console.log(url)
       

            try{
                const respuesta = await fetch(url,
                   {method: 'DELETE'}
                );
                if(!respuesta.ok){
                  throw new Error('Error al eliminar el producto');  
                }

                alert('Producto eliminado exitosamente.')
                
               
            }catch (error){
                console.error(error.message);
                alert('Hubo un problema al elminar el producto.');

            };

       



     } 



     









    //LOCALSTORAGE    

        const saveDataToLocalStorage = (compra,user) => {
            try {
            // Convierte el objeto a una cadena JSON
            const dataJson = JSON.stringify(compra);

            // Guarda la cadena JSON en el localStorage
            localStorage.setItem(user.user, dataJson);

            console.log('Datos guardados en el localStorage:', dataJson);
            } catch (error) {
            console.error('Error al guardar datos en el localStorage:', error);
            }
        };



        const loadDataFromLocalStorage = (user) => {
        try {
            // Obtiene la cadena JSON del localStorage
            const storedData = localStorage.getItem(user.user);

            // Si existe la cadena JSON, la parsea a un objeto
            if (storedData) {
            const parsedData = JSON.parse(storedData);
            console.log('Datos recuperados del localStorage:', parsedData);

            // Actualiza el estado con los datos recuperados
            setCompra(parsedData);
            // return parsedData;
            
            } else {
            console.log('No hay datos en el localStorage.');
            setCompra([]);
            
            }
        } catch (error) {
            console.error('Error al recuperar datos del localStorage:', error);
        }
        }; 

/* 
        const getUser = (key)=>{
        try {
            // Intenta obtener el item del localStorage
            const item = localStorage.getItem(key);

            // Si el item existe, parsea el contenido y devuélvelo
            if (item) {
            return (item) ;
            }

            // Si el item no existe, devuelve null
            return null;
        } catch (error) {
            console.error('Error al obtener el item del localStorage:', error);
            return null;
        }
            
        };


        const registrarUsuario = ()=>{

            const u = getUser ('usuario');
            setUser(u); 

        } */
 





















    return(
        <CarritoContext.Provider value={{
            compra,setCompra,
            user,setUser,
            btn,setBtn,
            logOut,
            syncEnabled,setSyncEnabled,
            saveDataToLocalStorage,
            loadDataFromLocalStorage,
            eliminarProducto,

            }}>
            {children}

        </CarritoContext.Provider>

    );


}; 