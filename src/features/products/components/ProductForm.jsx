import useProductForm from "../hooks/useProductForm"

function ProductForm({ onProductoCreado, productoEditar, setProductoEditar }) {

    const { nombre, setNombre, precio, setPrecio, categoria, setCategoria, stock, setStock, imagenURL, setImagenURL, handleSubmit } = useProductForm({ productoEditar, setProductoEditar, onProductoCreado })

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">

            <h2 className="text-xl font-bold mb-4">{productoEditar ? "Editar Producto" : "Crear Producto"}</h2>

            <input
                className="w-full p-2 border border-gray-300 rounded mb-4"
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />

            <input
                className="w-full p-2 border border-gray-300 rounded mb-4"
                type="number"
                placeholder="Precio"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
            />

            <input
                className="w-full p-2 border border-gray-300 rounded mb-4"
                type="text"
                placeholder="Categoría"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
            />

            <input
                className="w-full p-2 border border-gray-300 rounded mb-4"
                type="number"
                placeholder="Stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
            />

            <input
                className="w-full p-2 border border-gray-300 rounded mb-4"
                type="text"
                placeholder="URL de imagen"
                value={imagenURL}
                onChange={(e) => setImagenURL(e.target.value)}
            />

            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">{productoEditar ? "Editar Producto" : "Crear Producto"}</button>
        </form>
    )
}

export default ProductForm;