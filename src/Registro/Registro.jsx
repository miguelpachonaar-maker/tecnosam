import '../Estilos/Inicio.css';
import '../Estilos/Registro.css';
import {useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Registro = () => {

    /*Se crean estados para guardar valores ingresados en los inputs*/
  const [datos, guardarDatos] = useState({
    Usuario: "",
    Cedula: "",
    Correo: "",
    Celular: "",
    Direccion: "",
    Contraseña: ""
  });


const navigate = useNavigate();

  const [mensaje, setMensaje] = useState("");
   /*maneja los cambios de los inputs*/
  const actualizarCampo = (evento) => {
    const {name, value } = evento.target;
    guardarDatos({
        ...datos, 
        [name]: value,
    })
    
  };

/* maneja el envio de los datos del registro */
  const enviarFormulario = async (evento) => {
    evento.preventDefault(); // Evita el refresh de la página
    try{
    const respuesta = await axios.post("http://localhost:5000/api/usuarios/registro", datos);
    setMensaje(respuesta.data.mensaje);
    alert(`${respuesta.data.mensaje}`);
    alert(`Registro exitoso de ${datos.Usuario}`);
    const nombreUsuario = datos.Usuario;
    setTimeout(() => navigate("/Login", { state: { username: nombreUsuario } }), 1000);
    }catch (error){
       setMensaje("Error al registrar usuario");
    }
    
  };

  

  return(
 <div className="contenedor">
    
    <form className='formulario' onSubmit={enviarFormulario}>
        {/*se maneja los cambios que se realicen en los input*/}
        <h2>Bienvenido al Registro</h2>
        <label className='label'>
            Nombre de usuario:
            <input className= "input"
            type='text'
            name='Usuario'
            value={datos.Usuario} // guarda  el dato de  la  variable Usuario
            onChange={actualizarCampo}
             /* Manejador de cambios en los inputs */
            placeholder='Ingrese Usuario'
            pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ\\s]{4,20}"
            title="El usuario debe de contener entre 5 a 20 caracteres, sin números ni caracteres especiales"
            required
            />
        </label>
        <br/>

        <label className='label'>
            Cédula:
            <input className= "input"
            type='text'
            name='Cedula'
            value={datos.Cedula} // guarda  el dato de  la  variable Cedula
            onChange={actualizarCampo}
             /* Manejador de cambios en los inputs */
            placeholder='Ingrese Cedula'
            pattern="[0-9]{2,}"
            title="Ingrese un número de cédula valido"
            required
            />
        </label>
        <br/>


        <label className='label'>
            Correo:
            <input className= "input"
            type='email'
            name='Correo'
            value={datos.Correo} // guarda  el dato de  la  variable Correo
            onChange={actualizarCampo}
             /* Manejador de cambios en los inputs */
            placeholder='Ingrese correo'
            
            title='Debe ser un correo valido, ej: pepitoperez@dominio.com'
            required
            />
        </label>
        <br/>

        <label className='label'>
            Celular:
            <input className='input'
            type='text'
            name='Celular'
            value={datos.Celular} // guarda  el dato de  la  variable Celular
            onChange={actualizarCampo}
             /* Manejador de cambios en los inputs */
            placeholder='Ingrese celular'
            pattern='[0-9]{10}'
            title='Ingrese un número de celular valido'
            required
            />
        </label>
        <br/>

        <label className='label'>
            Dirección:
            <input className='input'
            type='text'
            name='Direccion'
            value={datos.Direccion} // guarda  el dato de  la  variable Direccion
            onChange={actualizarCampo}
             /* Manejador de cambios en los inputs */
            placeholder='Escriba su Dirección'
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
            pattern="[a-zA-ZÁÉÍÓÚáéíóúñÑ0-9._*$#!@?\-]{8,}"
            title='La contraseña no cumple con los parametros: Ingrese una contraseña con al menos 8 caracteres incluyendo números y caracteres especiales (._-/*$#!@?)'
            required
            />
        </label>


        <button className='boton-registro' type='Submit'>Registrese</button>
    </form>
 </div>
  );
};

export default Registro;
