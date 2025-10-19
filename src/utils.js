export async function getData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(`Se produjo el siguiente error: ${error}`);
    return []; 
}
}




/*  Opcion con seteo de estado en lugar de return


export async function getData(url,datos,setDatos){
    
    try{
    const response = await fetch(url);
    if (!response.ok){
       throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result)
    setDatos(result)
    }catch(error){
       console.log(`Se prodjo el siguiente error ${error}`);
    }


 } */