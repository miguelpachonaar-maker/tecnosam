import { Outlet } from 'react-router-dom'; // 👈 Necesario para inyectar páginas
import MenuNav from '../MenuNav/MenuNav';
import PiePagina from '../footer/footer.jsx';
import { useNavigate } from "react-router-dom";
import '../Estilos/Inicio.css';

function RootLayout() {

  const navigate = useNavigate();

  const cerrarSesion = () => {
        localStorage.removeItem("usuarioID");
        localStorage.removeItem("nombreUsuario");

        alert("Sesión Cerrada");
        navigate("/login");
    }
    
  return (
    <>
        <header className="inicio-header">
            <h2>Tech-eCommerce</h2>
            <button onClick={cerrarSesion} className="boton-cerrar-sesion">
              Cerrar Sesion.
            </button>
        </header>
        {/* 1. Elemento Fijo: La navegación se renderiza SIEMPRE */}
        <MenuNav /> 

        <main>
        {/* 2. El Router Inyecta la página que corresponda (Home, About, etc.) */}
            <Outlet /> 
        </main>

        {/* Puedes poner un Footer fijo aquí también */}
        <PiePagina />
    </>
  );
}
export default RootLayout;
