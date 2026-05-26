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
            <h1 className="text-3xl font-bold mb-6">Productos</h1>
            <ProductForm
                onProductoCreado={cargarProductos}
                productoEditar={productoEditar}
                setProductoEditar={setProductoEditar}
            />
            <ProductList
                productos={productos}
                onEliminar={handleEliminar}
                onEditar={setProductoEditar}
            />
        </div>
    );
}

export default ProductosPage;
