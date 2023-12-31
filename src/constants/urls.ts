const baseURL = 'https://api.themoviedb.org/3';
const movies = '/discover/movie';
const genre = '/genre/movie/list';
const poster = 'https://image.tmdb.org/t/p/w500';
const character = '/movie';



const urls = {
    movies,
    genre,
    byId: (id: string):string => `${character}/${id}`,
    poster: (key: string)=> `${poster}${key}`,
    search:(key:string)=>`/search/movie?query=${key}`,
    genreIdMovies: (id:string) => `/genre/${id}/movies`
}
export {
    baseURL,urls
};