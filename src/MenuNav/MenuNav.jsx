//Se importan los estilos necesarios
import "../Estilos/Inicio.css"
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css'

//Se define el componente de navegación
const MenuNav = () => {
  return (
    <nav className="MenuNav">
      <Link to="/" className="RutaPagina"> <i className="bi bi-phone"></i> Celulares</Link>
      <Link to ="/Portatiles" className="RutaPagina"> <i className="bi bi-laptop"></i> Portátiles</Link>
      <Link to ="/WorkStation" className="RutaPagina"> <i className="bi bi-cpu"></i> WorkStation</Link>
      <Link to ="/Tabletas" className="RutaPagina"> <i className="bi bi-tablet"></i> Tabletas</Link>
      <Link to ="/Televisores" className="RutaPagina"> <i className="bi bi-tv"></i> Televisores</Link>
      <Link to ="/Registro" className="RutaPagina"> <i className="bi bi-person-plus"></i> Registro</Link>
      <Link to ="/Login" className="RutaPagina"><i className="bi bi-box-arrow-in-right"></i> Iniciar Sesión</Link>
      <Link to = "/Carrito" className="RutaPagina"> <i className="bi bi-cart3"></i> Carrito</Link>
      <Link to ="/++" className="RutaPagina">++</Link>
    </nav>
  )
}
export default MenuNav