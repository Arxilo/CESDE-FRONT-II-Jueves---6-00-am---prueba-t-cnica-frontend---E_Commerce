import { useState, useEffect } from "react"
import { createProducto, updateProducto } from "../services/productService"
import { mostrarError } from "../../../shared/utils/alerts";

function useProductForm({ productoEditar, setProductoEditar, onProductoCreado }) {

    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState("");
    const [precio, setPrecio] = useState("");
    const [stock, setStock] = useState("");
    const [imagenURL, setImagenURL] = useState("");

    function limpiarFormulario() {
        setNombre("")
        setPrecio("")
        setCategoria("")
        setStock("")
        setImagenURL("")
    }

    async function handleSubmit(e) {
        e.preventDefault()
        if (!nombre.trim()) {
            mostrarError("El nombre no puede estar vacío")
            return
        }
        if (!categoria.trim()) {
            mostrarError("La categoría no puede estar vacía")
            return
        }
        if (precio === "") {
            mostrarError("El precio es obligatorio")
            return
        }
        if (precio < 0) {
            mostrarError("El precio no puede ser negativo")
            return
        }
        if (stock === "") {
            mostrarError("El stock es obligatorio")
            return
        }
        if (stock < 0) {
            mostrarError("El stock no puede ser negativo")
            return
        }
        if (!imagenURL.trim()) {
            mostrarError("La URL de imagen no puede estar vacía")
            return
        }

        const producto = { nombre, precio, categoria, stock, imagenURL }
        if (productoEditar) {
            await updateProducto(productoEditar.id, producto)
            setProductoEditar(null)
        } else {
            await createProducto(producto)
        }
        onProductoCreado()
        limpiarFormulario()
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