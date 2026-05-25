import { useState, useEffect } from "react";
import { getProductos } from "../services/productService";
import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";


function ProductosPage() {

    const [productos, setProductos] = useState([]);
    
    async function cargarProductos() {
        const data = await getProductos()
        setProductos(data)
    }

    useEffect(() => {
        cargarProductos()
    }, []) 


    return (
        <div>
            <h2>lista de productos</h2>
            <ProductList productos={productos} />
            <br /><br />

            <h1>=================</h1>

            <h2>Crear Producto</h2>
            <br />
            <ProductForm onProductoCreado={cargarProductos}/>
        </div>
    )
}

export default ProductosPage;