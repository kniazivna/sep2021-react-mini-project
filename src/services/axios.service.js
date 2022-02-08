import axios from "axios";

import baseURL from "../configs/urls";

const axiosService = axios.create({
    baseURL,
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTI3ZTgxMjE3MGE3YmVkYmExMTFlODI5MzVlOTQzZCIsInN1YiI6Ij' +
            'YyMDI2MzNjYWM2Yzc5MDAxYmQ5ZjBkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.32JOe6P3X7Bz2a0mwNeRJDRro' +
            'ir-1ZI4UWRZFiZZiOI'
    }
});

export {axiosService};

