import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as moviesActions from '../actions/moviesActions'
import '../css/styles.css'

/**
 * Componente para armar el listado de peliculas
 */
class ListMovies extends Component {

    // Se inicializan el estado actual del componente
    state = {
        shows: [{results: null}],
        sortType: 'asc',
        favorit_color: 'black',
        favorits: [0]
    }

    // Se manda llamar el metodo getMovies para obtener el listado
    componentDidMount() {
        if (!this.props.movies.length) {
            this.props.getMovies()
        }
    }

    // Para almacenar informacion de favoritos
    componentWillUnmount() {
        localStorage.setItem('favorits_movies', JSON.stringify(this.state.favorits))
    }

    // Metodo para ordenar el listado
    onSort = sortType => {
        this.setState({sortType});
    }

    // Metodo para añadir a favoritos
    addFavorit = (key, id) => {
        const favorit_movie = [...this.state.favorits]
        if (!favorit_movie.includes(id)) {
            favorit_movie.push(id)
            localStorage.setItem('favorits_movies', favorit_movie)
        }
        
        this.setState({favorits: favorit_movie})
        
        this.props.addFavorit(key)
    }

    // Metodo que detecta el elemento seleccionado
    selectedMovie = (key) => {
        this.props.selectedMovie(key)
    }    

    renderData = () => {
        const { sortType } = this.state
        const url = "https://image.tmdb.org/t/p/w500"

        if (this.props.loading) {
            return (
                <h1>Cargando</h1>
            )
        } else {

            if (this.props.movies) {
                
                const sorted = this.props.movies.sort((a,b) => {
                    const isReversed = (sortType === 'asc') ? 1 : -1
                    return isReversed * a.title.localeCompare(b.title)
                })
                return (
                    sorted.map((movie, key)=> {
                        let class_favorit_color = movie.favorit ? 'favorit__button__color__green' : 'favorit__button__color__white'
                        return (
                            <section key={key} className='card__container'>
                                <article className='card__detail'>
                                    <aside className='card__aside'>
                                        <figure className='card__img_wrap'>
                                            <Link to={`movie/${movie.id}/details`}>
                                                <img onClick={()=>this.selectedMovie(key)} className='card__img' src={`${url}${movie.poster_path}`} />
                                            </Link>
                                        </figure>
                                    </aside>
                                    <div className="card__body">
                                        <div onClick={()=>this.addFavorit(key, movie.id)} className='favorit-button-movie'>
                                            <span className={`icon-heart ${class_favorit_color}`}></span>
                                            <h4>Añadir a favoritos</h4>
                                        </div>
                                        <h2 className='card__title'>{movie.title}</h2>
                                        <div><span className='card__vote' >Votos: {movie.vote_count} </span></div>
                                        <div><span className='card__date' >Fecha: {movie.release_date}</span></div>
                                    </div>
                                </article>
                            </section>
                        )
                    }
                )
                )
            }
        }
            
    }

    render () {
        return (
            <div>
                <nav className='nav__bar'>
                    <h3 className='nav__bar_label'>Ordenar de:</h3>
                    <span onClick={()=>this.onSort('asc')} className="icon-sort-alpha-asc short_button">Ascendente</span>
                    <span onClick={()=>this.onSort('desc')} className="icon-sort-alpha-desc short_button">Descendente</span>
                </nav>
                
                { this.renderData() }
            </div>
            
        )
    }
}

const mapStateToProps = (state)=> {
    return state.moviesReducer;
}

const mapDispatchToProps = {
    getMovies: moviesActions.getMovies,
    selectedMovie: moviesActions.selectedMovie,
    addFavorit: moviesActions.addFavorit
}

export default connect(mapStateToProps,mapDispatchToProps)(ListMovies)