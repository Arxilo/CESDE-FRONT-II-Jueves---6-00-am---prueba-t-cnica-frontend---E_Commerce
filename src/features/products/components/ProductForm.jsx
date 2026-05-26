import useProductForm from "../hooks/useProductForm"

function ProductForm({ onProductoCreado, productoEditar, setProductoEditar }) {

    const { nombre, setNombre, precio, setPrecio, categoria, setCategoria, stock, setStock, imagenURL, setImagenURL, handleSubmit } = useProductForm({ productoEditar, setProductoEditar, onProductoCreado })

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <br />
            <input
                type="number"
                placeholder="Precio"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
            />
            <br />
            <input
                type="text"
                placeholder="Categoría"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
            />
            <br />
            <input
                type="number"
                placeholder="Stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
            />
            <br />
            <input
                type="text"
                placeholder="URL de imagen"
                value={imagenURL}
                onChange={(e) => setImagenURL(e.target.value)}
            />
            <br />
            <button type="submit" style={{ marginTop: "10px", backgroundColor: "green" }}>{productoEditar ? "Editar Producto" : "Crear Producto"}</button>
        </form>
    )
}

export default ProductForm;