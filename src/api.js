import axios from "axios";

const API_BASE_URL = "https://127.0.0.1:3001";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    // ITEMS
    fetchItems() {
        return axios.get(`${API_BASE_URL}/items`);
    },
    addItem(item) {
        return axios.post(`${API_BASE_URL}/items`, { item });
    },
    updateItem(item) {
        return axios.patch(`${API_BASE_URL}/items/${item.id}`, { item });
    },
    deleteItem(item) {
        return axios.delete(`${API_BASE_URL}/items/${item.id}`);
    },
    // CATEGORIES
    fetchCategories() {
        return axios.get(`${API_BASE_URL}/categories`);
    },
    addCategory(category) {
        return axios.post(`${API_BASE_URL}/categories`, { category });
    },
    updateCategory(category) {
        return axios.patch(`${API_BASE_URL}/categories/${category.id}`, { category });
    },
    deleteCategory(category) {
        return axios.delete(`${API_BASE_URL}/categories/${category.id}`);
    },
}