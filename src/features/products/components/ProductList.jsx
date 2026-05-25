import ProductCard from "./ProductCard";


function ProductList({productos , onEliminar}) {
    return(
        <div>
            {
                productos.map((producto) => (
                    <ProductCard key={producto.id} producto={producto} onEliminar={onEliminar}/>
                ))
            }
        </div>
    )
}

export default ProductList;
