import useProductos from "../hooks/useProductos";
import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";
import Pagination from "../../../shared/components/Pagination";

function ProductosPage() {
    const {
        productos,
        productosPaginados,
        productoEditar,
        setProductoEditar,
        handleEliminar,
        cargarProductos,
        paginaActual,
        setPaginaActual,
        totalPaginas,
    } = useProductos();

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Productos</h1>
            <ProductForm
                onProductoCreado={cargarProductos}
                productoEditar={productoEditar}
                setProductoEditar={setProductoEditar}
            />
            <ProductList
                productos={productosPaginados}
                onEliminar={handleEliminar}
                onEditar={setProductoEditar}
            />

            <Pagination
                paginaActual={paginaActual}
                totalPaginas={totalPaginas}
                setPaginaActual={setPaginaActual}
                totalProductos={productos.length}
            />

        </div>
    );
}

export default ProductosPage;
