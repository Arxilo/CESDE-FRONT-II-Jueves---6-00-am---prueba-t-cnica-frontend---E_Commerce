import { useState, useEffect } from "react"
import { createProducto, updateProducto } from "../services/productService"

function useProductForm({ productoEditar, setProductoEditar, onProductoCreado }) {

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

    return { nombre, setNombre, precio, setPrecio, categoria, setCategoria, stock, setStock, imagenURL, setImagenURL, handleSubmit }

}

export default useProductForm