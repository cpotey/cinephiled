import React from 'react';
import { searchMovies } from '../actions/index';
import MoviesList from '../components/MoviesList';

class Search extends React.Component {

    constructor(){
        super();
        this.state = {
            searchResults: []
        }
        this.searchMovies = searchMovies.bind(this);
        
    }

    componentDidMount = () => {

        const query = this.props.match.params.query

        let search = window.location.search;
        let params = new URLSearchParams(search);
        let page = params.get('page');

        // Do the search function
        this.searchMovies(query,page)
    }

    render() {

        const movieResults =  this.state.searchResults

        return (
   
            <MoviesList movieResults={movieResults} />
            
        )
    }
}

export default Search