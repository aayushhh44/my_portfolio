import axios from "axios";
//production
// export const baseURL = 'https://portfolio-backend-ujzz.onrender.com/api';

//dev
export const baseURL = 'http://localhost:3090/api';


export default axios.create({
    baseURL:baseURL
})