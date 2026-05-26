function ProductCard({ producto, onEliminar, onEditar }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">

            <h3 className="text-lg font-bold mb-2">{producto.nombre}</h3>

            <img src={producto.imagenURL} alt={producto.nombre} className="w-full h-48 object-cover rounded mb-4" />
            <p className="text-gray-600 mb-1">Categoría: {producto.categoria}</p>
            <p className="text-gray-600 mb-1">Precio: ${producto.precio}</p>
            <p className="text-gray-600 mb-4">Stock: {producto.stock}</p>

            <div className="flex gap-2">
                <button onClick={() => onEditar(producto)} className="flex-1 bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600">Editar</button>
                <button onClick={() => onEliminar(producto.id)} className="flex-1 bg-red-500 text-white p-2 rounded hover:bg-red-600">Eliminar</button>
            </div>

        </div>
    )
}

export default ProductCard;