//Se importan los componentes y estilos necesarios
import '../Estilos/Inicio.css';
import MenuNav from "../MenuNav/MenuNav.jsx";
import DivCelulares from "../DivProductos/DivCelulares.jsx";
import CarruselMarcas from '../Carruseles/CarruselMarcas.jsx';
import PiePagina from '../footer/footer.jsx';
import SeccionSuscripcion from './SeccionSuscripcion.jsx';

//Componente principal de la página de inicio
const PaginaInicio = ()=>{
    return <>
        <header className="inicio-header">
            <h2>Tech-eCommerce</h2>
        </header>
        <body>
            <MenuNav />
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
            <PiePagina />
        </body>
    </>
}
export default PaginaInicio;