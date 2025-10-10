//Se importan los componentes y estilos necesarios
import '../Estilos/Inicio.css';
import DivCelulares from "../DivProductos/DivCelulares.jsx";
import CarruselMarcas from '../Carruseles/CarruselMarcas.jsx';
import SeccionSuscripcion from './SeccionSuscripcion.jsx';

//Componente principal de la página de inicio
const PaginaInicio = ()=>{
    return <>
        
            <div className="inicio">
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