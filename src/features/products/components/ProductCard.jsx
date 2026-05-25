function ProductCard({producto , onEliminar}) {
    return(
        <div>
            <ul>
                <li> id: {producto.id} </li>
                <li> Nombre: {producto.nombre} </li>
                <li> Categoria: {producto.categoria} </li>
                <li> Precio: {producto.precio} </li>
                <li> stock: {producto.stock} </li>
                <li>
                    imagen: <img src={producto.imagenURL} alt="No existe esa imagen" />
                </li>
                <button>editar</button>
                <button onClick={ () => onEliminar(producto.id)}>Eliminar</button>
            </ul>
        </div>
    )
}

export default ProductCard;