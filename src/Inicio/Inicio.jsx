import '../estilos/inicio.css';
import Nav from "../Nav/Nav.jsx";
import Div from "../DivProductos/Div.jsx";

const inicio = ()=>{
    return <>
        <header className="inicio-header">
            <h2>Tecnosam</h2>
        </header>
        <body>
            <Nav />
            <div className="inicio">
                <p style={{color: 'crimson'}}>¡Gran promoción en equipos Lenovo!</p>
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
        </body>
    </>
}

export default inicio;