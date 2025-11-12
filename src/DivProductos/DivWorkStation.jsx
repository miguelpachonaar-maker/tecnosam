import '../Estilos/Inicio.css';
import axios from 'axios';
//Se define el componente Div que representa un producto individual
const DivWorkStation = ()=>{

    const agregarAlCarrito = async () => {
            try {
                const usuarioID = localStorage.getItem("usuarioID");
                
                const productoID = "6914360783a35cd5a465355e";
    
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
                <h3>Computador Gamer Razer Edition</h3>
                <img src="https://http2.mlstatic.com/D_NQ_NP_831625-MCO89464177843_082025-O.webp" alt="imagen iphone" />
                <div className="descriocion">
                    <span>Intel Core i7 | GPU GeForce RTX 4070 | 16 GB RAM | 1 TB SSD | $4.800.000</span>
                </div>
                <button className="boton-agregar" onClick={agregarAlCarrito}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    </>
}
export default DivWorkStation;