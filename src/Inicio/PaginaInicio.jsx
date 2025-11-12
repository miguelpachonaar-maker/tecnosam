//Se importan los componentes y estilos necesarios
import '../Estilos/Inicio.css';
import DivCelulares from "../DivProductos/DivCelulares.jsx";
import CarruselMarcas from '../Carruseles/CarruselMarcas.jsx';
import SeccionSuscripcion from './SeccionSuscripcion.jsx';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


//Componente principal de la página de inicio
const PaginaInicio = ()=>{

    const [nombreUsuario, setNombreUsuario] = useState("Invitado");
    const navigate = useNavigate();


    useEffect(() => {
        const usuarioID = localStorage.getItem("usuarioID");
        const nombreGuardado = localStorage.getItem("nombreUsuario");

        if (!usuarioID) {
            navigate("/login", {replace: true});
        } else {
            setNombreUsuario(nombreGuardado || "Invitado");
        }
    }, [navigate]);


    

    return <>
        <div className="inicio">
            <h1>Bienvenido, {nombreUsuario}</h1>
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