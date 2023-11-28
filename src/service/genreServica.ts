import {IRes} from "../types/IResType";
import {IGanre, IGanres} from "../interface/interfaceGanre";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {IMovies} from "../interface/interfaceMovies";


const genresService ={
    getAll:():IRes<IGanres<IGanre>> => apiService.get(urls.genre),
    getMovieById:(id:string, page:string):IRes<IMovies> => apiService.get(urls.genreIdMovies(id), {params:{page}})
}


export {
    genresService
}