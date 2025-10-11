//Se importa React y ReactDOM para renderizar la aplicación
import React from 'react';
import ReactDOM from 'react-dom/client';
import IndexApp from './IndexApp.jsx';
import { BrowserRouter } from 'react-router-dom';

//Se crea la conexión final con los componentes a mostrar en la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    /*Se envuelve la aplicación con el Router*/
    <React.StrictMode>
        <BrowserRouter> 
            <IndexApp />
        </BrowserRouter>
    </React.StrictMode>
);