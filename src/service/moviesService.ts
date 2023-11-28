import {IRes} from "../types/IResType";
import {IMovies} from "../interface/interfaceMovies";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const moviesService = {
    getAll:(page:string):IRes<IMovies> => apiService.get(urls.movies, {params:{page}}),
}

export {
    moviesService
}