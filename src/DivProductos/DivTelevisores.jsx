import '../Estilos/Inicio.css';
import axios from 'axios';
//Se define el componente Div que representa un producto individual
const DivTelevisores = ()=>{

    const agregarAlCarrito = async () => {
        try {
            const usuarioID = localStorage.getItem("usuarioID");
            
            const productoID = "691435a283a35cd5a465355d";

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
                <h3>Kalley Smart TV 40" 40G200 FHD LED</h3>
                <img src="https://www.kalley.com.co/medias/7705946475341-006-750Wx750H?context=bWFzdGVyfGltYWdlc3w0ODA4MnxpbWFnZS93ZWJwfGFESTBMMmhpWXk4eE5EWXlPRGt5TmpNeU5EYzJOaTgzTnpBMU9UUTJORGMxTXpReFh6QXdObDgzTlRCWGVEYzFNRWd8MGE3YTgxY2VlZWVjYjAxMjQ4YmE3MzI5MmZjZWYzMDM5MmIxZjgyNWJhYmZiMGVmOTZiYjE1ZDJiZTE5N2EwMg" alt="imagen iphone" />
                <div className="descriocion">
                    <span>Smart TV Google | Pantalla 40″ (100.4 cm) FHD | LED | Resolución Full HD | $799.900</span>
                </div>
                 <button className="boton-agregar" onClick={agregarAlCarrito}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    </>
}
export default DivTelevisores;