import '../Estilos/Inicio.css';
import SeccionSuscripcion from '../Inicio/SeccionSuscripcion.jsx';
import DivTelevisores from '../DivProductos/DivTelevisores.jsx';

//Componente principal de la página de inicio
const PaginaTelevisores = ()=>{
    return <>
        <header className="inicio-seccion">
            <h2>Televisores</h2>
        </header>
        <div className="inicio">
            <p style={{color: 'crimson'}}>¡Gran promoción en televisores SmartTV!</p>
        </div>
         <div style={{flexWrap: 'wrap', display: 'flex', justifyContent: 'center'}}>
            <DivTelevisores />
            <DivTelevisores />
            <DivTelevisores />
            <DivTelevisores />
            <DivTelevisores />
            <DivTelevisores />
            <DivTelevisores />
        </div>
        <div>
            <SeccionSuscripcion />
        </div>
    </>
}
export default PaginaTelevisores;