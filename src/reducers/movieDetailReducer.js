import {REQUEST_GET_MOVIE_DETAIL, REQUEST_LOADING_MOVIE_DETAIL, REQUEST_ERROR_MOVIE_DETAIL} from '../types/movieDetailTypes'

const INITIAL_STATE = {
    movieDetail: [],
    loading: true,
    error: null,
    favorits: []
}

const FAVORIT = 'FAVORIT'
const UPDATE_MOVIES = 'UPDATE_MOVIES'

export default (state = INITIAL_STATE, action, getState) => {
    switch (action.type) {
        case REQUEST_GET_MOVIE_DETAIL:
            return {...state, movieDetail: action.payload, loading: false, error: ''}
        case REQUEST_LOADING_MOVIE_DETAIL:
            return {loading: true}
        case REQUEST_ERROR_MOVIE_DETAIL:
            return {error: action.payload, loading: false}
        
        case FAVORIT:
            const movies = getState.moviesReducer
            return {...state, movieDetail: state.movieDetail.concat(action.payload) }
        default:
            return state;
    }
}