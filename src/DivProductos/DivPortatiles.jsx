import '../Estilos/Inicio.css';
import axios from "axios";

//Se define el componente Div que representa un producto individual
const DivPortatiles = ()=>{

    const agregarAlCarrito = async () => {
        try {
            const usuarioID = localStorage.getItem("usuarioID");
            
            const productoID = "691426c683a35cd5a46534ae";

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
                <h3>Portátil Lenovo IdeaPad 3</h3>
                <img src="https://exitocol.vtexassets.com/arquivos/ids/31374040/Computador-LENOVO-AMD-Ryzen-5-4-Nucleos-8-GB-RAM-512-GB-SSD-3402892_a.jpg?v=638962487650100000" alt="imagen portatil" />
                <div className="descripcion">
                    <span>AMD Ryzen 5 | 8GB RAM | 512GB SSD | $100.000</span>
                </div>
                
                <button className="boton-agregar" onClick={agregarAlCarrito}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    </>
}
export default DivPortatiles;