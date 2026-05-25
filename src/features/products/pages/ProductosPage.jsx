import { useState, useEffect } from "react";
import { getProductos , deleteProducto} from "../services/productService";
import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";
import { confirmarEliminacion } from "../../../shared/utils/alerts";


function ProductosPage() {

    const [productos, setProductos] = useState([]);
    const [productoEditar , setProductoEditar] = useState(null)
    
    async function cargarProductos() {
        const data = await getProductos()
        setProductos(data)
    }

    async function handleEliminar(id) {
        const confirmado = await confirmarEliminacion()
        if(confirmado){
            await deleteProducto(id)
            cargarProductos()
        }
        
    }

    useEffect(() => {
        cargarProductos()
    }, []) 


    return (
        <div>
            <h1>=================</h1>

            <h2>lista de productos</h2>
            <ProductList productos={productos} onEliminar={handleEliminar} onEditar={setProductoEditar}/>
            <br /><br />

            <h1>=================</h1>

            <h2>Crear Producto</h2>
            <br />
            <ProductForm onProductoCreado={cargarProductos} productoEditar = {productoEditar} setProductoEditar={setProductoEditar}/>
        </div>
    )
}

export default ProductosPage;