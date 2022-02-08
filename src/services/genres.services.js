import {axiosService} from "./axios.service";
import {urls} from "../configs";


export const genresService = {
    getAll: () => axiosService.get(urls.genres)
        .then(value => value.data)

}

