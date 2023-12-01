import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayouts} from "./layouts";
import {GenresIdPage, GenresPage, MovieInfoPage, MoviesPage, SearchPage} from "./pages";


let router = createBrowserRouter([
    {path:'', element:<MainLayouts/>, children:[
            {index:true, element:<Navigate to={'movies'}/>},
            {path:'movies', element:<MoviesPage/>},
            {path:'/movies/:id', element:<MovieInfoPage/>},
            {path:'genres', element:<GenresPage/>},
            {path: '/genres/:id', element: <GenresIdPage/>},
            {path:'/search', element:<SearchPage/>},
        ]}

]);

export {
    router
}