import {apiService} from "./apiService";
import {IRes} from "../types";
import {IMovie} from "../interface";
import {urls} from "../constants";


const movieInfoService = {
    getById: (id:string):IRes<IMovie> => apiService.get(urls.byId(id)),
}


export {
    movieInfoService
}