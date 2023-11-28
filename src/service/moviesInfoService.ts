import {apiService} from "./apiService";
import {IRes} from "../types/IResType";
import {IMovie} from "../interface/interfaceMovies";
import {urls} from "../constants/urls";


const movieInfoService = {
    getById: (id:string):IRes<IMovie> => apiService.get(urls.byId(id)),
}


export {
    movieInfoService
}