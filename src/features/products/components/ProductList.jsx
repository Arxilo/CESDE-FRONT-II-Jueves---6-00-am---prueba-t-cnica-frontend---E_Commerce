import ProductCard from "./ProductCard";


function ProductList({productos , onEliminar , onEditar}) {
    return(
        <div>
            {
                productos.map((producto) => (
                    <ProductCard key={producto.id} producto={producto} onEliminar={onEliminar} onEditar={onEditar}/>
                ))
            }
        </div>
    )
}

export default ProductList;
