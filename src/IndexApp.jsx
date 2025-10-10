import { Routes, Route } from 'react-router-dom';
import RootLayout from './Layout/RootLayout.jsx';
import PaginaInicio from "./Inicio/PaginaInicio.jsx";
import PaginaPortatiles from "./PaginasAdicionales/PaginaPortatiles.jsx";
const IndexApp = () => {
    return <>
        <Routes>
      
      {/* RUTA PADRE: Asigna el Layout como el elemento principal */}
            <Route path="/" element={<RootLayout />}>
        
        {/* RUTA HIJA DE ÍNDICE: Se renderiza en el <Outlet> de RootLayout 
           cuando la URL es exactamente "/" */}
            <Route index element={<PaginaInicio />} /> 
        
       {/*Ruta Portatiles */}
            <Route path="Portatiles" element={<PaginaPortatiles />} />
        
        {/* 404 para URLs que no coinciden */}
            <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
    </Routes>

    </>
}

export default IndexApp;