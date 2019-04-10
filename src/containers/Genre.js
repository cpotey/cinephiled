import React from 'react';
import { discoverMovies, getGenres } from '../actions/index';
import MoviesList from '../components/MoviesList';

class Genre extends React.Component {

    constructor(){
        super();
        this.state = {
            searchResults: []
        }
        this.discoverMovies = discoverMovies.bind(this);
        this.getGenres = getGenres.bind(this);
        
    }

    componentDidMount = () => {

        const query = this.props.match.params.query

        let search = window.location.search;
        let params = new URLSearchParams(search);
        let page = params.get('page');

        // Do the search function
        this.discoverMovies(query,page)

        this.getGenres();

    }

    render() {

        const movieResults =  this.state.searchResults

        return (
   
            <MoviesList movieResults={movieResults} />
            
        )
    }
}

export default Genre