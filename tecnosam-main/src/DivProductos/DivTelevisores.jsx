import '../Estilos/Inicio.css';

//Se define el componente Div que representa un producto individual
const DivTelevisores = ()=>{
    return <>
        <div class="div-productos">
            <div class="objeto-card" style={{margin: '10px', textAlign: 'center'}}>
                <h3>Producto</h3>
                <img src="https://www.kalley.com.co/medias/7705946475341-006-750Wx750H?context=bWFzdGVyfGltYWdlc3w0ODA4MnxpbWFnZS93ZWJwfGFESTBMMmhpWXk4eE5EWXlPRGt5TmpNeU5EYzJOaTgzTnpBMU9UUTJORGMxTXpReFh6QXdObDgzTlRCWGVEYzFNRWd8MGE3YTgxY2VlZWVjYjAxMjQ4YmE3MzI5MmZjZWYzMDM5MmIxZjgyNWJhYmZiMGVmOTZiYjE1ZDJiZTE5N2EwMg" alt="imagen iphone" />
                <div class="descriocion">
                    <span>Aquí va una breve descripción del producto con sus especificaciones técnicas, el precio $100.000 e información relevante del equipo</span>
                </div>
            </div>
        </div>
    </>
}
export default DivTelevisores;