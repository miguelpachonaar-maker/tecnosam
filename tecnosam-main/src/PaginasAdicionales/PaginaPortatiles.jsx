import DivPortatiles from '../DivProductos/DivPortatiles.jsx';
import '../Estilos/Inicio.css';
import SeccionSuscripcion from '../Inicio/SeccionSuscripcion.jsx';

//Componente principal de la página de inicio
const PaginaPortatiles = ()=>{
    return <>
        <header className="inicio-seccion">
            <h2>Portátiles</h2>
        </header>
        <div className="inicio">
            <p style={{color: 'crimson'}}>¡Gran promoción en equipos Lenovo!</p>
        </div>
        <div style={{flexWrap: 'wrap', display: 'flex', justifyContent: 'center'}}>
            <DivPortatiles />
            <DivPortatiles />
            <DivPortatiles />
            <DivPortatiles />
            <DivPortatiles />
            <DivPortatiles />
            <DivPortatiles />
        </div>
        <div>
            <SeccionSuscripcion />
        </div>
    </>
}
export default PaginaPortatiles;