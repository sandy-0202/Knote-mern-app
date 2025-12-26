import axios from "axios";


//made the url to be dynamic for deployement
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api"
const api = axios.create({
    baseURL: BASE_URL,
})

export default api;