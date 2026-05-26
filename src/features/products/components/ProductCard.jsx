function ProductCard({ producto, onEliminar, onEditar }) {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">

            <div className="relative p-4">
                <img src={producto.imagenURL} alt={producto.nombre} className="w-full h-48 object-cover rounded-xl" />
                <span className="absolute top-6 right-6 bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-semibold">{producto.categoria}</span>
            </div>

            <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1">{producto.nombre}</h3>
                <p className="text-purple-600 font-bold text-xl mb-1">${Number(producto.precio).toLocaleString()}</p>
                <p className="text-sm text-gray-400 mb-4">Stock disponible: {producto.stock}</p>

                <div className="flex gap-2">
                    <button onClick={() => onEditar(producto)} className="flex-1 border border-yellow-400 text-yellow-500 font-semibold py-1.5 rounded-lg text-sm hover:bg-yellow-50 transition-colors">Editar</button>
                    <button onClick={() => onEliminar(producto.id)} className="flex-1 border border-red-400 text-red-500 font-semibold py-1.5 rounded-lg text-sm hover:bg-red-50 transition-colors">Eliminar</button>
                </div>
            </div>

        </div>
    )
}

export default ProductCard;