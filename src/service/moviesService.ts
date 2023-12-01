import {IRes} from "../types";
import {IMovies} from "../interface";
import {apiService} from "./apiService";
import {urls} from "../constants";

const moviesService = {
    getAll:(page:string):IRes<IMovies> => apiService.get(urls.movies, {params:{page}}),
    getMoviesQuery:(key:string, page:string):IRes<IMovies> => apiService.get(urls.search(key), {params:{page}})
}

export {
    moviesService
}