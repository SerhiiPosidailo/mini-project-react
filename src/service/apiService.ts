import axios from "axios";
import {baseURL} from "../constants/urls";

const apiService = axios.create({baseURL})

apiService.interceptors.request.use((constants) => {
    constants.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjM3MjBkMDdkN2E2ZjAzZjZkZTdjZWU0M2EyZDI0MSIsInN1YiI6IjY1NDg5YjY2NDFhNTYxMzM2YTIzNjI3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iykG5jG1JJNRf76lPgemg9IBt8K_-zqxiVSCxZK2Z54'
    return constants
})

export {
    apiService
}