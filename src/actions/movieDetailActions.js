import {REQUEST_GET_MOVIE_DETAIL} from '../types/movieDetailTypes'
/**
 * Metodo para obtener una pelicula por id
 * @param {idMovie} idMovie 
 */

export const getById = (idMovie)=> async (dispatch, getState)=> {

    const {movies} = getState().moviesReducer;
    const selected = movies.find(movie=> movie.id === parseInt(idMovie))

    dispatch({
        type: REQUEST_GET_MOVIE_DETAIL,
        payload: selected
    })
    
}

