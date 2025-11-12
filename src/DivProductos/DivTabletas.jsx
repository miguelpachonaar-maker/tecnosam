import '../Estilos/Inicio.css';
import axios from 'axios';

//Se define el componente Div que representa un producto individual
const DivTabletas = ()=>{

    const agregarAlCarrito = async () => {
        try {
            const usuarioID = localStorage.getItem("usuarioID");
            
            const productoID = "691433cf83a35cd5a465355b";

            const respuesta = await axios.post("http://localhost:5000/api/carrito/agregar",{
                usuarioID,
                productoID,
                cantidad: 1
            });
            alert(respuesta.data.mensaje);
        } catch (error) {
            console.error("Error Al agregar: ", error);
            alert("No se pudo agregar al carrito");
        }
    };

    return <>
        <div className="div-productos">
            <div className="objeto-card" style={{margin: '10px', textAlign: 'center'}}>
                <h3>iPad 10a genereación</h3>
                <img src="https://www.smartgadgets.com.co/cdn/shop/files/16_86134516-c77e-4f3a-bda0-b9ef53b72b80.jpg?v=1734211085" alt="imagen iphone" />
                <div className="descripcion">
                    <span>iPad | Pantalla 10.9″ Liquid Retina | Chip Apple A14 | 64 GB Storage | $100.000</span>
                </div>
                <button className="boton-agregar" onClick={agregarAlCarrito}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    </>
}
export default DivTabletas;