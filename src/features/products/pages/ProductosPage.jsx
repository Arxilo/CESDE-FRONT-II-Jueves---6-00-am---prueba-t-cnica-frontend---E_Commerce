import useProductos from "../hooks/useProductos";
import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";

function ProductosPage() {
    const {
        productos,
        productoEditar,
        setProductoEditar,
        handleEliminar,
        cargarProductos,
    } = useProductos();

    return (
        <div>
            <h1>=================</h1>

            <h2>lista de productos</h2>
            <ProductList
                productos={productos}
                onEliminar={handleEliminar}
                onEditar={setProductoEditar}
            />
            <br />
            <br />

            <h1>=================</h1>

            <h2>Crear Producto</h2>
            <br />
            <ProductForm
                onProductoCreado={cargarProductos}
                productoEditar={productoEditar}
                setProductoEditar={setProductoEditar}
            />
        </div>
    );
}

export default ProductosPage;
