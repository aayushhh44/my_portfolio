import axios from "axios";

export const baseURL = 'https://portfolio-backend-ujzz.onrender.com/api';

export default axios.create({
    baseURL:baseURL
})