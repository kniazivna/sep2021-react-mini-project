import {axiosService} from "./axios.service";
import {urls} from "../configs";

export const moviesService = {

    getAll: (page) => axiosService.get(urls.movies, {params: {page}})
        .then(value => value.data),

    getMovieDetailsById: (movie_id) =>axiosService.get(`${urls.movieDetails}/${movie_id}`)
        .then(value => value.data),
}
