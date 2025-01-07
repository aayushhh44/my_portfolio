import axios from "axios";

export const baseURL = 'http://localhost:3090/api/';

export default axios.create({
    baseURL:baseURL
})