import axios from "axios"

const BASE_URL = "https://6a13b44b6c7db8aac0534936.mockapi.io/api/ecommerce/productos"

export async function getProductos() {
    const response = await axios.get(BASE_URL)
    return response.data;
}

export async function createProducto(producto) {
    const response = await axios.post(BASE_URL , producto)
    return response.data;
}

export async function updateProducto(id , producto) {
    const response = await axios.put(`${BASE_URL}/${id}` , producto)
    return response.data;
}

export async function deleteProducto(id) {
    const response = await axios.delete(`${BASE_URL}/${id}`)
    return response.data;
}
