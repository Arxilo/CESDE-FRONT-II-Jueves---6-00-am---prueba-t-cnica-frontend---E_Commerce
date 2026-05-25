import Swal from "sweetalert2";

export async function confirmarEliminacion() {
    const result = await Swal.fire({
        title: "¿Estás seguro?",
        text: "Este producto se eliminará",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar"
    })
    return result.isConfirmed
}
