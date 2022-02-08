import axios from "axios";

import baseURL from "../configs/urls";

const axiosService = axios.create({
    baseURL,
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTQ1YWRkNzFmNjdhYTkzMmZkYTJhNjRhODdiNzQ1NCIsInN1YiI6IjYyMDE' +
            '3MzkzOWQ1OTJjMDA2YWFkNmFiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tovcJSjLoah4_WU-reMomKuzVJBmT-fzdn' +
            'vRZp3cjJo'
    }
});

export {axiosService};