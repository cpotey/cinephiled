import React from 'react';
import { getMovie } from '../actions/index';

class Movie extends React.Component {

    constructor(){
        super();
        this.state = {
            activeMovie: []
        }
        this.getMovie = getMovie.bind(this);
    }

    componentDidMount = () => {
        const movieID = this.props.match.params.id
        this.getMovie(movieID)
    }

    render() {

        const movie = this.state.activeMovie
        console.log(movie)

        return (
   
            <div>
                <p>test</p>
                <h1>{movie.title}</h1>
            </div>
            
        )
    }
}

export default Movie