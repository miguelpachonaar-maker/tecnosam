import '../estilos/inicio.css';

const Div = ()=>{
    return <>
        <div>
            <div class="objeto-card" style={{margin: '10px'}}>
                <h3>Datos del Producto</h3>
                <div class="campo">
                    <span>ID del Producto:</span>
                    <p id="producto-id">001</p>
                </div>
                <div class="campo">
                    <span>Nombre:</span>
                    <p id="producto-nombre">Laptop Ultraligera</p>
                </div>
                <div class="campo">
                    <span>Precio:</span>
                    <p id="producto-precio">$1200.00</p>
                </div>
                <div class="campo">
                    <span>En Stock:</span>
                    <p id="producto-stock">Sí</p>
                </div>
            </div>
        </div>
    </>
}
export default Div;