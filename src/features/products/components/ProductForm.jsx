import useProductForm from "../hooks/useProductForm"

function ProductForm({ onProductoCreado, productoEditar, setProductoEditar }) {

    const { nombre, setNombre, precio, setPrecio, categoria, setCategoria, stock, setStock, imagenURL, setImagenURL, handleSubmit } = useProductForm({ productoEditar, setProductoEditar, onProductoCreado })

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 mb-8">

            <h2 className="text-lg font-bold text-gray-800 mb-6">{productoEditar ? "Editar Producto" : "Crear Producto"}</h2>


            <div className="flex gap-4 mb-4">

                <div className="flex-1">
                    <label className="block text-sm text-gray-600 mb-1">Nombre</label>
                    <input className="w-full p-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-purple-400" type="text" placeholder="Camiseta básica" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className="flex-1">
                    <label className="block text-sm text-gray-600 mb-1">Precio</label>
                    <input className="w-full p-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-purple-400" type="number" placeholder="0" value={precio} onChange={(e) => setPrecio(e.target.value)} />
                </div>

            </div>

            <div className="flex gap-4 mb-4">
                <div className="flex-1">
                    <label className="block text-sm text-gray-600 mb-1">Categoría</label>
                    <input className="w-full p-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-purple-400" type="text" placeholder="Selecciona una categoría" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
                </div>
                <div className="flex-1">
                    <label className="block text-sm text-gray-600 mb-1">URL de imagen</label>
                    <input className="w-full p-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-purple-400" type="text" placeholder="https://..." value={imagenURL} onChange={(e) => setImagenURL(e.target.value)} />
                </div>
            </div>

            <div className="mb-6">
                <label className="block text-sm text-gray-600 mb-1">Stock</label>
                <input className="w-full p-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-purple-400" type="number" placeholder="0" value={stock} onChange={(e) => setStock(e.target.value)} />
            </div>

            <button type="submit" className="w-full bg-purple-600 text-white p-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                {productoEditar ? "Guardar Cambios" : "Crear Producto"}
            </button>

        </form>
    )
}

export default ProductForm;