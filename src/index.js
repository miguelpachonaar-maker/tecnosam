//Se importa React y ReactDOM para renderizar la aplicación
import ReactDOM from 'react-dom/client';
import IndexApp from './indexApp.jsx';

//Se crea la conexión final con los componentes a mostrar en la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <IndexApp />
);