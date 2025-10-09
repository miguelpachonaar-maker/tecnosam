import '../Estilos/Inicio.css';
import MenuNav from "../MenuNav/MenuNav.jsx";
import PiePagina from '../footer/footer.jsx';
import SeccionSuscripcion from '../Inicio/SeccionSuscripcion.jsx';

//Componente principal de la página de inicio
const PaginaPortatiles = ()=>{
    return <>
        <header className="inicio-header">
            <h2>Pagina Portátiles</h2>
        </header>
        <body>
            <MenuNav />
            <div className="inicio">
                <p style={{color: 'crimson'}}>¡Gran promoción en equipos Lenovo!</p>
            </div>
            <div>
                <SeccionSuscripcion />
            </div>
            <PiePagina />
        </body>
    </>
}
export default PaginaPortatiles;