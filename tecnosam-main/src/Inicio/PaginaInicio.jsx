//Se importan los componentes y estilos necesarios
import '../Estilos/Inicio.css';
import DivCelulares from "../DivProductos/DivCelulares.jsx";
import CarruselMarcas from '../Carruseles/CarruselMarcas.jsx';
import SeccionSuscripcion from './SeccionSuscripcion.jsx';
import { useLocation } from "react-router-dom";

//Componente principal de la página de inicio
const PaginaInicio = ()=>{

    const location = useLocation();
    const { username } = location.state || { username: "Invitado" };

    return <>
        <div className="inicio">
            <h1>Bienvenido, {username}</h1>
            <p style={{color: 'crimson'}}>¡Gran promoción en equipos Lenovo!</p>
        </div>
        <div>
            <CarruselMarcas />
        </div>
        <div style={{flexWrap: 'wrap', display: 'flex', justifyContent: 'center'}}>
            <DivCelulares />
            <DivCelulares />
            <DivCelulares />
            <DivCelulares />
            <DivCelulares />
            <DivCelulares />
            <DivCelulares />
        </div>
        <div>
            <SeccionSuscripcion />
        </div>
    </>
}
export default PaginaInicio;