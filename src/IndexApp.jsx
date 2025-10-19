import { Routes, Route } from 'react-router-dom';
import RootLayout from './Layout/RootLayout.jsx';
import PaginaInicio from "./Inicio/PaginaInicio.jsx";
import PaginaPortatiles from "./PaginasAdicionales/PaginaPortatiles.jsx";
import PaginaWorkStation from "./PaginasAdicionales/PaginaWorkStation.jsx";
import PaginaTabletas from "./PaginasAdicionales/PaginaTabletas.jsx";
import PaginaTelevisores from "./PaginasAdicionales/PaginaTelevisores.jsx";
import Registro from "./Registro/Registro.jsx";
import Login from "./Login/Login.jsx";

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
        
        {/*Ruta WorkStation */}
            <Route path="WorkStation" element={<PaginaWorkStation />} />

        {/*Ruta Tabletas */}
            <Route path="Tabletas" element={<PaginaTabletas />} />

        {/*Ruta Televisores */}
            <Route path="Televisores" element={<PaginaTelevisores />} />

        {/*Ruta para el registro*/ }
            <Route path='Registro' element={<Registro />} /> 

        {/*Ruta para el inicio de sesión*/}
            <Route path='Login' element={<Login />} />
      
        {/* 404 para URLs que no coinciden */}
            <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
    </Routes>

    </>
}

export default IndexApp;