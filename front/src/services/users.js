import axios from 'axios';

const API_URL = "http://localhost:8000/api/users";

export const login = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/login/`, userData);
        return response.data;  
    } catch (error) {
        throw error.response?.data || { error: 'Error desconocido' };
  }
}