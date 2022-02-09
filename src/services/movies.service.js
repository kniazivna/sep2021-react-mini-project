import {axiosService} from "./axios.service";
import {urls} from "../configs";

export const moviesService = {
    getAll: () => axiosService.get(urls.movies)
    //     .then(value => value.data),
    // getMovieDetailsById: (movie_id) =>axiosService.get(`${urls.movieDetails}/${movie_id}`)
    //     .then(value => value.data)
}
