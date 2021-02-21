import axios from 'axios'
import {REQUEST_GET_MOVIES, REQUEST_LOADING_MOVIES, REQUEST_ERROR_MOVIES} from '../types/moviesTypes'

/**
 * Metodo para obtener listado de peliculas
 * Se usa la libreria de axios para conectarse a la API
 */

export const getMovies = () => async (dispatch, getState)=> {

    dispatch({
        type: REQUEST_LOADING_MOVIES
    })

    const { movies } = getState().moviesReducer
    try {
        const api = axios.create({
            baseURL: 'https://api.themoviedb.org/3/',
            timeout: 6000,
            headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWVjNTY0ZDc3MjMxY2VkMDI2Y2VhYWZmMjU4Yjc3MiIsInN1YiI6IjYwMmIwZThiOWE5ZTIwMDAzZjM1MWU2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pfd_MX4tIQ9LqmOwRfUPr5yTJzoX5nOEmx59LYLBtRI'}
        })
        const media_type = 'all'
        const time_window = 'week'
        const url = `/trending/${media_type}/${time_window}`
        const url_movies = 'movie/popular?language=en-US&page=1'
        const response = await api.get(url_movies);
        const newMovies = response.data.results;
        // const movies_favorits = JSON.parse(localStorage.getItem('favorits_movies'))
        newMovies.map((movie) =>{
            //let found = movies_favorits.find(id => parseInt(id) === parseInt(movie.id))
            return Object.assign(movie, {favorit: false})
        })
        response.data.results = newMovies;
        let movies_update
        if (!movies === undefined) {
            movies_update = [
                ...movies.results,
                response.data.results
            ]
        } else {
            movies_update = response.data.results
        }
        
        dispatch({
            type: REQUEST_GET_MOVIES,
            payload: movies_update
        })
    } catch (error) {
        dispatch({
            type: REQUEST_ERROR_MOVIES,
            payload: error.message
        })
    }
}

export const addFavorit = (key) => (dispatch, getState) => {
    const { movies, selectedMovie } = getState().moviesReducer;
    
    if (key === 'detail') {
        key = selectedMovie
    }
    const selected = movies[key]
    
    const favorit_movie = {
        ...selected,
        favorit: !selected.favorit
    }

    const movies_updated = [...movies];
    movies_updated[key] = favorit_movie

    dispatch({
        type: REQUEST_GET_MOVIES,
        payload: movies_updated
    })
}

const MOVIE_SELECTED = 'MOVIE_SELECTED'

export const selectedMovie = (key) => (dispatch) => {
    dispatch({
        type: MOVIE_SELECTED,
        payload: key
    })
}