import { combineReducers } from 'redux'
import moviesReducer from './moviesReducer'
import movieDetailReducer from './movieDetailReducer'

export default combineReducers({
    moviesReducer,
    movieDetailReducer
})