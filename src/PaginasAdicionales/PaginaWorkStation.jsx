import '../Estilos/Inicio.css';
import SeccionSuscripcion from '../Inicio/SeccionSuscripcion.jsx';
//Componente principal de la página de inicio
const PaginaWorkStation = ()=>{
    return <>
        <header className="inicio-seccion">
            <h2>WorkStation</h2>
        </header>
            <div className="inicio">
                <p style={{color: 'crimson'}}>¡Tu PC GAMER está en Tech-ecommerce!</p>
            </div>
            <div>
                <SeccionSuscripcion />
            </div>

    </>
}
export default PaginaWorkStation;