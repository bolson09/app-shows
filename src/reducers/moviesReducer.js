import {REQUEST_GET_MOVIES, REQUEST_LOADING_MOVIES, REQUEST_ERROR_MOVIES} from '../types/moviesTypes'

const INITIAL_STATE = {
    movies: [],
    loading: true,
    error: null,
    selectedMovie: null
}

const MOVIE_SELECTED = 'MOVIE_SELECTED'

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST_GET_MOVIES:
            return {...state, movies: action.payload, loading: false, error: ''}
        case REQUEST_LOADING_MOVIES:
            return {loading: true}
        case REQUEST_ERROR_MOVIES:
            return {error: action.payload, loading: false}
        
        case MOVIE_SELECTED:
            return {...state, selectedMovie: action.payload}
            
        default:
            return state;
    }
}