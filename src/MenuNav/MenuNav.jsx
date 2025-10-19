//Se importan los estilos necesarios
import "../Estilos/Inicio.css"
import { Link } from 'react-router-dom';

//Se define el componente de navegación
const MenuNav = () => {
  return (
    <nav className="MenuNav">
      <Link to="/" class="RutaPagina">Celulares</Link>
      <Link to ="/Portatiles" class="RutaPagina">Portátiles</Link>
      <Link to ="/WorkStation" class="RutaPagina">WorkStation</Link>
      <Link to ="/Tabletas" class="RutaPagina">Tabletas</Link>
      <Link to ="/Televisores" class="RutaPagina">Televisores</Link>
      <Link to ="/Registro" class="RutaPagina">Registro</Link>
      <Link to ="/Login" class="RutaPagina">Iniciar Sesión</Link>
      <Link to ="/++" class="RutaPagina">++</Link>
    </nav>
  )
}
export default MenuNav