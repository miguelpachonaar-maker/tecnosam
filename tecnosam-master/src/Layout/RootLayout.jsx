import { Outlet } from 'react-router-dom'; // 👈 Necesario para inyectar páginas
import MenuNav from '../MenuNav/MenuNav';
import PiePagina from '../footer/footer.jsx';

function RootLayout() {
  return (
    <>
        <header className="inicio-header">
            <h2>Tech-eCommerce</h2>
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
