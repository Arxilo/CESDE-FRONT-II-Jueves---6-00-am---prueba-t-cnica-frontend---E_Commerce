import { useState, useEffect } from "react";
import { createProducto , updateProducto } from "../services/productService";

function ProductForm({ onProductoCreado, productoEditar, setProductoEditar }) {

    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState("");
    const [precio, setPrecio] = useState("");
    const [stock, setStock] = useState("");
    const [imagenURL, setImagenURL] = useState("");

    async function handleSubmit(e) {
        e.preventDefault()
        const producto = { nombre, precio, categoria, stock, imagenURL }
        if (productoEditar) {
            await updateProducto(productoEditar.id, producto)
            setProductoEditar(null)
        } else {
            await createProducto(producto)
        }
        onProductoCreado()
    }

    useEffect(() => {
        if (productoEditar) {
            setNombre(productoEditar.nombre)
            setPrecio(productoEditar.precio)
            setCategoria(productoEditar.categoria)
            setStock(productoEditar.stock)
            setImagenURL(productoEditar.imagenURL)
        }
    }, [productoEditar])

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
            <button type="submit" style={{ marginTop: "10px", backgroundColor: "green" }}>Crear producto</button>
        </form>
    )
}

export default ProductForm;