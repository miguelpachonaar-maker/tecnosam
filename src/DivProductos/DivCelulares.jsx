import '../Estilos/Inicio.css';

//Se define el componente Div que representa un producto individual
const DivCelulares = ()=>{
    return <>
        <div className="div-productos">
            <div className="objeto-card" style={{margin: '10px', textAlign: 'center'}}>
                <h3>Producto</h3>
                <img src="https://i.blogs.es/69248e/iphone/1366_2000.jpeg" alt="imagen iphone" />
                <div className="descriocion">
                    <span>Aquí va una breve descripción del producto con sus especificaciones técnicas, el precio $100.000 e información relevante del equipo</span>
                </div>
            </div>
        </div>
    </>
}
export default DivCelulares;