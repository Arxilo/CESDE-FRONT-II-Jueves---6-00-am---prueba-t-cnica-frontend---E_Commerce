function ProductList({productos}) {
    return(
        <ul>
            {
                productos.map((producto) => (
                    <li key={producto.id}> {producto.nombre} </li>
                ))
            }
        </ul>
    )
}

export default ProductList;
