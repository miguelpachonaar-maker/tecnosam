import '../Estilos/Inicio.css';

//Se define el componente Div que representa un producto individual
const DivTabletas = ()=>{
    return <>
        <div className="div-productos">
            <div className="objeto-card" style={{margin: '10px', textAlign: 'center'}}>
                <h3>Producto</h3>
                <img src="https://www.smartgadgets.com.co/cdn/shop/files/16_86134516-c77e-4f3a-bda0-b9ef53b72b80.jpg?v=1734211085" alt="imagen iphone" />
                <div className="descriocion">
                    <span>Aquí va una breve descripción del producto con sus especificaciones técnicas, el precio $100.000 e información relevante del equipo</span>
                </div>
            </div>
        </div>
    </>
}
export default DivTabletas;