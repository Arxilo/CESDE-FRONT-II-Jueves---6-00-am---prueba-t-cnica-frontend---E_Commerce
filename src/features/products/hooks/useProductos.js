import { useState, useEffect } from "react"
import { getProductos, deleteProducto } from "../services/productService"
import { confirmarEliminacion } from "../../../shared/utils/alerts"

function useProductos() {

    const [productos, setProductos] = useState([]);
    const [productoEditar, setProductoEditar] = useState(null)

    async function cargarProductos() {
        const data = await getProductos()
        setProductos(data)
    }

    async function handleEliminar(id) {
        const confirmado = await confirmarEliminacion()
        if (confirmado) {
            await deleteProducto(id)
            cargarProductos()
        }

    }

    useEffect(() => {
        cargarProductos()
    }, [])

    return { productos, productoEditar, setProductoEditar, handleEliminar, cargarProductos }
}

export default useProductos