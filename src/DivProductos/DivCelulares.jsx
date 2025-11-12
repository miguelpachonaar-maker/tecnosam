import '../Estilos/Inicio.css';
import axios from 'axios';

//Se define el componente Div que representa un producto individual
const DivCelulares = ()=>{

    const agregarAlCarrito = async () => {
        try {
            const usuarioID = localStorage.getItem("usuarioID");
            
            const productoID = "691434cb83a35cd5a465355c";

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
                <h3>iPhone 15 Pro Max</h3>
                <img src="https://i.blogs.es/69248e/iphone/1366_2000.jpeg" alt="imagen iphone" />
                <div className="descriocion">
                    <span>iOS 17 | Pantalla 6.7″ Super Retina XDR | Chip A17 Pro | 256 GB | $5.800.000</span>
                </div>
                <button className="boton-agregar" onClick={agregarAlCarrito}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    </>
}
export default DivCelulares;