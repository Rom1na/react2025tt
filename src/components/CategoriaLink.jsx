import { useNavigate } from "react-router-dom";
import { getData } from "../utils";
const CategoriaLink = ({ url, categoria}) => {
  const navigate = useNavigate();

  const handleClick = async () => {
    const productos = await getData(url);
    /* console.log(productos) */
    navigate(`/galeria/${categoria}`, {
      state: { productos, categoria},
    });
  };

  return <p onClick={handleClick}>{categoria}</p>;
};

export default CategoriaLink;
