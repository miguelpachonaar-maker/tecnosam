import '../Estilos/Inicio.css';
import SeccionSuscripcion from '../Inicio/SeccionSuscripcion.jsx';

const PaginaCarrito = () => {
      return  <>
      <header className="carrito-header">
        <h4><i className="bi bi-cart4"></i> Carrito de Compras</h4>
      </header>

      <main className="carrito-main">
        <div className="carrito-contenedor">
          <p className="carrito-texto">
            Aquí encontrará los elementos agregados al carrito
          </p>

          <div className="carrito-lista">
            <p className="carrito-vacio">
              Tu carrito está vacío por ahora.
            </p>
          </div>

          <button className="boton-pagar">
            <i className="bi bi-credit-card"></i> Pagar
          </button>
        </div>
      </main>

      <footer>
        <SeccionSuscripcion />
      </footer>
      </> 

    
}

export default PaginaCarrito;