import '../Estilos/Inicio.css';

//Se define el componente Div que representa un producto individual
const DivWorkStation = ()=>{
    return <>
        <div className="div-productos">
            <div className="objeto-card" style={{margin: '10px', textAlign: 'center'}}>
                <h3>Producto</h3>
                <img src="https://http2.mlstatic.com/D_NQ_NP_831625-MCO89464177843_082025-O.webp" alt="imagen iphone" />
                <div className="descriocion">
                    <span>Aquí va una breve descripción del producto con sus especificaciones técnicas, el precio $100.000 e información relevante del equipo</span>
                </div>
            </div>
        </div>
    </>
}
export default DivWorkStation;