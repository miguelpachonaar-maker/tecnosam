//Se importan los estilos necesarios
import "../Estilos/Inicio.css"
import { Link } from 'react-router-dom';

//Se define el componente de navegación
const MenuNav = () => {
  return (
    <nav className="MenuNav">
      <Link to="/" class="RutaPagina">Celulares</Link>
      <Link to ="/Portatiles" class="RutaPagina">Portátiles</Link>
      <Link to ="/WorkSattion" class="RutaPagina">WorkStation</Link>
      <Link to ="/Tablets" class="RutaPagina">Tablets</Link>
      <Link to ="/Televisores" class="RutaPagina">Televisores</Link>
      <Link to ="/IoT" class="RutaPagina">IoT</Link>
      <Link to ="/++" class="RutaPagina">++</Link>
    </nav>
  )
}
export default MenuNav