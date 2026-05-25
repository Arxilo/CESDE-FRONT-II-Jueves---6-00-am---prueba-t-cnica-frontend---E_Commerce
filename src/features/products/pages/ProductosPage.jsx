import { useState , useEffect } from "react";
import { getProductos } from "../services/productService";
import ProductList from "../components/ProductList";


function ProductosPage() {

    const [productos, setProductos] = useState([]);
    useEffect(() => {
        async function cargar() {
            const data = await getProductos()
            setProductos(data)
        }
        cargar()
    }, [])

    return (
        <ProductList productos={productos} />
    )
}

export default ProductosPage;