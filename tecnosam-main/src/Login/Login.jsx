/* Importa los estilos CSS para aplicar formato al componente*/
import '../Estilos/Inicio.css';
import '../Estilos/Registro.css';
/* Importa las funcion de React y la función de navegación de React Router*/
import {useState} from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
  
  
    // Estado 'datos' guarda lo que el usuario escribe en los inputs
  const [datos, guardarDatos] = useState({
    Usuario: "",
    Contraseña: ""
  });

  
  // Función de React Router para redirigir a otras páginas
  const navigate = useNavigate();

   /*maneja los cambios de los inputs*/
  const actualizarCampo = (evento) => {
    // Extrae el nombre y valor del input que se está modificando
    const {name, value } = evento.target;
    // Actualiza el estado 'datos' con el nuevo valor sin perder los anteriores
    guardarDatos({
        ...datos, [name]: value,
    })
    
  };
  
  
  /* maneja el envio de los datos del registro */
  const enviarFormulario = (evento) => {
    evento.preventDefault(); // Evita el refresh de la página
    console.log("Datos Del Formulario");
    console.log("Usuario", datos.Usuario);
    console.log("Contraseña", datos.Contraseña);
     // Guarda el nombre de usuario ingresado
     const nombreUsuario = datos.Usuario;
     // Actualiza los estados con el nombre del usuario y marca que está logeado
    alert(`Bienvenido ${datos.Usuario}`);
    // Redirige al usuario a la página principal ("/") después de 1 segundo
    setTimeout(() => navigate("/", { state: { username: nombreUsuario } }), 1000);
  };

  

  return(
 <div className="contenedor">
    
    <form className='formulario' onSubmit={enviarFormulario}>
        {/*se maneja los cambios que se realicen en los input*/}
        <h2>Inicio de Sesión</h2>
        <label className='label'>
            Nombre de usuario:
            <input className= "input"
            type='text'
            name='Usuario'
            value={datos.Usuario} // guarda  el dato de  la  variable Usuario
            onChange={actualizarCampo}
             /* Manejador de cambios en los inputs */
            placeholder='Ingrese Usuario'
            pattern="[A-Z a-z ÁÉÍÓÚáéíóúÑñ] {5, 20}"
            title="El usuario debe de contener entre 5 a 20 caracteres, sin números ni caracteres especiales"
            required
            />
        </label>
        <br/>

        <label className='label'>
            Contraseña:
            <input className='input'
            type={"password"}
            name='Contraseña'
            value={datos.Contraseña} // guarda  el dato de  la  variable contraseña
            onChange={actualizarCampo}
             /* Manejador de cambios en los inputs */
            placeholder='Ingrese Contraseña'
            pattern='[a-zA-ZÁÉÍÓÚáéíóúñÑ 0-9 ._-/*$#!@?]{8,}'
            title='La contraseña no cumple con los parametros: Ingrese una contraseña con al menos 8 caracteres incluyendo números y caracteres especiales (._-/*$#!@?)'
            required
            />
        </label>


        <button className='boton-registro' type='Submit'>Iniciar Sesion</button>
    </form>
 </div>
  )
}

export default Login;
