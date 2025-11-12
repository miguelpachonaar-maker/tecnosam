import '../Estilos/Inicio.css';
import SeccionSuscripcion from '../Inicio/SeccionSuscripcion.jsx';
import { useEffect, useState } from "react";
import axios from "axios";

const PaginaCarrito = () => {

    const [carrito, setCarrito] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [total, setTotal] = useState(0);

    useEffect(() => {
  const buscarCarrito = async () => {
    try {
      const usuarioID = localStorage.getItem("usuarioID");
      if(!usuarioID){
        console.error("No se encontro usuarioID");
        setCargando(false);
        return;
      }
      const respuesta = await axios.get(`http://localhost:5000/api/carrito/${usuarioID}`);
      const productos = respuesta.data.productos || [];
      setCarrito(productos);

      // Calcular total después de cargar el carrito
      calcularTotal(productos);

    } catch (error) {
      console.error("Error al obtener carrito", error);
    } finally {
      setCargando(false);
    }
  };

  buscarCarrito();
}, []);

    const calcularTotal = (productos) => {
    const totalCalculado = productos.reduce(
      (acc, item) => acc + item.cantidad * item.productoID.precio,
      0
    );
    setTotal(totalCalculado);
  };
  
    useEffect(() => {
    const totalCalculado = carrito.reduce(
      (acc, item) => acc + item.cantidad * item.productoID.precio,
      0
    );
    setTotal(totalCalculado);
  }, [carrito]);

  const actualizarCantidad = async (productoID, cambio) => {
    try {
      const usuarioID = localStorage.getItem("usuarioID");
      const respuesta = await axios.put(
        `http://localhost:5000/api/carrito/${usuarioID}/${productoID}`,
        { cantidad: cambio }
      );
      // Reemplazamos el carrito completo para que React detecte cambios
      setCarrito(respuesta.data.productos || []);
    } catch (error) {
      console.error("Error al actualizar cantidad:", error);
    }
  };



      return  <>
      <header className="carrito-header">
        <h4><i className="bi bi-cart4"></i> Carrito de Compras</h4>
      </header>

      <main className="carrito-main">
        <div className="carrito-contenedor">
          {cargando ? (
            <p>Cargando carrito...</p>
          ): carrito.length === 0 ? (
            <p className="carrito-vacio"> Tu carrito está vacío por ahora. </p>
          ) : (
            <div className="carrito-lista">
              {carrito.map((item) => (
                <div key={item.productoID._id} className='carrito-item'>
                  <img
                    src={item.productoID.imagen}
                    alt={item.productoID.nombre}
                    className='carrito-imagen'
                    style={{width: "100px", height: "100px", objectFit: "cover" }}
                  />
                  <div>
                    <h4>{item.productoID.nombre}</h4>
                    <p>{item.productoID.descripcion}</p>
                    <p>Precio: ${item.productoID.precio}</p>

                    <div className="carrito-cantidad">
                      <button className='cantidad-btn' onClick={() => actualizarCantidad(item.productoID._id, -1)}>-</button>
                      <span>{item.cantidad}</span>
                      <button className='cantidad-btn' onClick={() => actualizarCantidad(item.productoID._id, 1)}>+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
          )}
          <div className="carrito-total">
                <h3>Total: ${total.toLocaleString()}</h3>
              </div>
          <button className="boton-pagar" onClick={() =>
              window.open ("https://registro.pse.com.co/PSEUserRegister", "_blank"
            )}>
            <i className="bi bi-credit-card" ></i> Pagar
          </button>
        </div>
      </main>

      <footer>
        <SeccionSuscripcion />
      </footer>
      </> 

    
}

export default PaginaCarrito;