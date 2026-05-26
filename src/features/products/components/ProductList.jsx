import ProductCard from "./ProductCard";


function ProductList({productos , onEliminar , onEditar}) {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                productos.map((producto) => (
                    <ProductCard key={producto.id} producto={producto} onEliminar={onEliminar} onEditar={onEditar}/>
                ))
            }
        </div>
    )
}

export default ProductList;
