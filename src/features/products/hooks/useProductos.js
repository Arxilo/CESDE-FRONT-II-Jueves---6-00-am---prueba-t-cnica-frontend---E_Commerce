import { useState, useEffect } from "react"
import { getProductos, deleteProducto } from "../services/productService"
import { confirmarEliminacion } from "../../../shared/utils/alerts"

function useProductos() {

    const [productos, setProductos] = useState([]);
    const [productoEditar, setProductoEditar] = useState(null)
    const [paginaActual, setPaginaActual] = useState(1)
    const productosPorPagina = 6
    const totalPaginas = Math.ceil(productos.length / productosPorPagina)
    const inicio = (paginaActual - 1) * productosPorPagina
    const productosPaginados = productos.slice(inicio, inicio + productosPorPagina)


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

    return { productos, productosPaginados, productoEditar, setProductoEditar, handleEliminar, cargarProductos, paginaActual, setPaginaActual, totalPaginas }
}

export default useProductos