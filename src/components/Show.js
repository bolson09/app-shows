import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as moviesActions from '../actions/moviesActions'
import ListMovies from './ListMovies'
import '../css/styles.css'

/**
 * Componente para mostrar el listado de Peliculas
 */

class Show extends Component {

    state = {
        shows: [{results: null}],
        sortType: 'asc'
    }

    // Se manda llamar un componente especial para iterar el listado de peliculas
    renderData = () => {
        return (
            <ListMovies/>
        )    
    }

    // Aqui se renderiza el dom
    render() {
        return (
            <div>
                <header>
                    <div className='header--title-container'>
                        <h1>Bienvenido</h1>
                        <h2>Peliculas mas vistas durante la semana</h2>
                    </div>
                </header>
                
                <div>
                    {  this.renderData() }
                </div>
            </div>
        )
    }
}

// Se manda llamar el estado actual de las peliculas
const mapStateToProps = (state)=> {
    return state.moviesReducer;
}

// Metodos de acciones de redux para actualizar estados
const mapDispatchToProps = {
    getMovies: moviesActions.getMovies,
    selectedMovie: moviesActions.selectedMovie,
    addFavorit: moviesActions.addFavorit
}

export default connect(mapStateToProps, mapDispatchToProps)(Show)