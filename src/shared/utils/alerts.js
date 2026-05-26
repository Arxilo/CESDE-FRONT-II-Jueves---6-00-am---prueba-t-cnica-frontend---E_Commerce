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

export function mostrarError(mensaje) {
    Swal.fire({
        title: "Error",
        text: mensaje,
        icon: "error"
    })
}

export function mostrarExito(mensaje) {
    Swal.fire({
        title: "Éxito",
        text: mensaje,
        icon: "success",
        timer: 1500,
        showConfirmButton: false
    })
}