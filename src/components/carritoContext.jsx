import { createContext,useActionState, useState } from "react";

export const CarritoContext = createContext();
export const CarritoProvider = ({children}) =>{
        const [compra,setCompra] = useState([]);
        const [auth, setAuth] = useState(false);
        const [user, setUser] = useState();
        const [btn, setBtn] = useState('Ingresa!');
        const [syncEnabled, setSyncEnabled] = useState(true);

        
        function logOut(){
            
            setBtn('Ingresa!');
            setAuth(false);
            setUser('');
            setSyncEnabled(false)
            
                        
            
        }

        const saveDataToLocalStorage = (compra,user) => {
            try {
            // Convierte el objeto a una cadena JSON
            const dataJson = JSON.stringify(compra);

            // Guarda la cadena JSON en el localStorage
            localStorage.setItem(user, dataJson);

            console.log('Datos guardados en el localStorage:', dataJson);
            } catch (error) {
            console.error('Error al guardar datos en el localStorage:', error);
            }
        };



        const loadDataFromLocalStorage = (user) => {
        try {
            // Obtiene la cadena JSON del localStorage
            const storedData = localStorage.getItem(user);

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

        }
 





















    return(
        <CarritoContext.Provider value={{
            compra,setCompra,
            auth,setAuth,
            user,setUser,
            btn,setBtn,
            logOut,
            syncEnabled,setSyncEnabled,
            saveDataToLocalStorage,
            loadDataFromLocalStorage,

            }}>
            {children}

        </CarritoContext.Provider>

    );


}; 