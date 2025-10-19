import '../Estilos/Inicio.css';

//Se define el componente Div que representa un producto individual
const DivPortatiles = ()=>{
    return <>
        <div class="div-productos">
            <div class="objeto-card" style={{margin: '10px', textAlign: 'center'}}>
                <h3>Producto</h3>
                <img src="https://exitocol.vtexassets.com/arquivos/ids/31374040/Computador-LENOVO-AMD-Ryzen-5-4-Nucleos-8-GB-RAM-512-GB-SSD-3402892_a.jpg?v=638962487650100000" alt="imagen portatil" />
                <div class="descriocion">
                    <span>Aquí va una breve descripción del producto con sus especificaciones técnicas, el precio $100.000 e información relevante del equipo</span>
                </div>
            </div>
        </div>
    </>
}
export default DivPortatiles;