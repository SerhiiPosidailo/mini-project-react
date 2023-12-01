import {IRes} from "../types";
import {IGanre, IGanres, IMovies} from "../interface";
import {apiService} from "./apiService";
import {urls} from "../constants";



const genresService ={
    getAll:():IRes<IGanres<IGanre>> => apiService.get(urls.genre),
    getMovieById:(id:string, page:string):IRes<IMovies> => apiService.get(urls.genreIdMovies(id), {params:{page}})
}


export {
    genresService
}