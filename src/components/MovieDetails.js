import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import * as moviesActions from '../actions/moviesActions'
import * as movieDetailActions from '../actions/movieDetailActions'

const {getMovies: getMovies, addFavorit } = moviesActions
const {getById: getById } = movieDetailActions

const URL = "https://image.tmdb.org/t/p/w500"

class MovieDetails extends Component {

    componentDidMount() {
        //if (!this.props.movies.length) {
        //    await this.props.getMovies()
        //}

        this.props.getById(this.props.match.params.movieId)
    }

    addFavorit = (key) => {
        this.props.addFavorit(key)
        this.props.getById(this.props.match.params.movieId)
    }

    renderData = () => {
        const {movieDetail, error, loading} = this.props
        const url = "https://image.tmdb.org/t/p/w500"
        if (this.props.loading) {
            return (
                <div>Cargando...</div>
            )
        }
        
        if (this.props.movieDetail) {
            let class_favorit_color = movieDetail.favorit ? 'favorit__button__color__green' : 'favorit__button__color__white'

            return (
                <section className='card__container'>
                    <article className='card__detail'>
                        <div className="card__body__detail">
                            <figure className='card__img_wrap'>
                                <img className='card__img_detail' src={`${url}${movieDetail.poster_path}`} />
                            </figure>
                            
                            <div className='card__body_info'>
                                <div onClick={()=>this.addFavorit('detail')} className='card__favorit_button_detail'>
                                    <span className={`icon-heart ${class_favorit_color}`}></span>
                                    <h4>Añadir a favoritos</h4>
                                </div>
                                
                                <div><h2 className='card__title'>{movieDetail.title}</h2></div>
                                <div><span className='card__vote' >Votos: {movieDetail.vote_count} </span></div>
                                <div><span className='card__date' >Fecha: {movieDetail.release_date}</span></div>                            </div>
                            
                        </div>
                        <div className='card__footer_detail'>
                            <span className='card__overview' >{movieDetail.overview}</span>
                        </div>
                    </article>
                </section>
            )
        }
        
    }

    render() {
        return (
            <div>
                <div>
                    {  this.renderData() }
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        movies: state.moviesReducer,
        movieDetail: state.movieDetailReducer.movieDetail,
        favorits: state.movieDetailReducer.favorits,
        loading: state.movieDetailReducer.loading,
        error: state.movieDetailReducer.error
    }
}

const mapDispatchToProps = {
    getMovies,
    getById,
    addFavorit
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)