//Se importan los componentes y estilos necesarios
import '../estilos/inicio.css';
import Nav from "../Nav/Nav.jsx";
import Div from "../DivProductos/Div.jsx";
import Carrusel from '../Carruseles/Carrusel.jsx';
import SeccionInicio from './seccion-inicio.jsx';
import Piepagina from '../footer/footer.jsx';

//Componente principal de la página de inicio
const inicio = ()=>{
    return <>
        <header className="inicio-header">
            <h2>Tech-eCommerce</h2>
        </header>
        <body>
            <Nav />
            <div className="inicio">
                <p style={{color: 'crimson'}}>¡Gran promoción en equipos Lenovo!</p>
            </div>
            <div>
                <Carrusel />
            </div>
            <div style={{flexWrap: 'wrap', display: 'flex', justifyContent: 'center'}}>
                <Div />
                <Div />
                <Div />
                <Div />
                <Div />
                <Div />
                <Div />
            </div>
            <div>
                <SeccionInicio />
            </div>
            <Piepagina />
        </body>
    </>
}
export default inicio;