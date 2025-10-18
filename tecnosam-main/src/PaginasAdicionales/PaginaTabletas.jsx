import '../Estilos/Inicio.css';
import SeccionSuscripcion from '../Inicio/SeccionSuscripcion.jsx';
import DivTabletas from '../DivProductos/DivTabletas.jsx';

//Componente principal de la página de inicio
const PaginaTabletas = ()=>{
    return <>
        <header className="inicio-seccion">
            <h2>Tabletas</h2>
        </header>
        <div className="inicio">
            <p style={{color: 'crimson'}}>¡Gran promoción en tabletas Samsung!</p>
        </div>
         <div style={{flexWrap: 'wrap', display: 'flex', justifyContent: 'center'}}>
            <DivTabletas />
            <DivTabletas />
            <DivTabletas />
            <DivTabletas />
            <DivTabletas />
            <DivTabletas />
            <DivTabletas />
        </div>
        <div>
            <SeccionSuscripcion />
        </div>
    </>
}
export default PaginaTabletas;