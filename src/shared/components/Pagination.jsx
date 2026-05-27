function Pagination({ paginaActual, totalPaginas, setPaginaActual, totalProductos }) {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-14">
            <p className="text-sm text-gray-500">
                Mostrando {(paginaActual - 1) * 6 + 1} - {Math.min(paginaActual * 6, totalProductos)} de {totalProductos} productos
            </p>
            <div className="flex items-center gap-2">
                <button
                    onClick={() => setPaginaActual(paginaActual - 1)}
                    disabled={paginaActual === 1}
                    className="text-sm text-gray-500 border border-gray-300 px-4 py-1.5 rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                    ← Anterior
                </button>
                {Array.from({ length: totalPaginas }, (_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => setPaginaActual(i + 1)}
                        className={`w-8 h-8 rounded-lg text-sm ${paginaActual === i + 1 ? "bg-purple-600 text-white" : "text-gray-600 hover:bg-gray-100"}`}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    onClick={() => setPaginaActual(paginaActual + 1)}
                    disabled={paginaActual === totalPaginas}
                    className="text-sm text-gray-500 border border-gray-300 px-4 py-1.5 rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                    Siguiente →
                </button>
            </div>
        </div>
    )
}

export default Pagination;