import {IRes} from "../types/IResType";
import {IGanre, IGanres} from "../interface/interfaceGanre";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";


const genresService ={
    getAll:():IRes<IGanres<IGanre>> => apiService.get(urls.genre),
}


export {
    genresService
}