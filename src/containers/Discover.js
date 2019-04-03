import React from 'react';
import { discoverMovies } from '../actions/index';
import MoviesList from '../components/MoviesList';

class Discover extends React.Component {

    constructor(){
        super();
        this.state = {
            searchResults: []
        }
        this.discoverMovies = discoverMovies.bind(this);
        
    }

    componentDidMount = () => {

        const query = this.props.match.params.query

        let search = window.location.search;
        let params = new URLSearchParams(search);
        let page = params.get('page');

        // Do the search function
        this.discoverMovies(query,page)
    }

    render() {

        const movieResults =  this.state.searchResults

        return (
   
            <MoviesList movieResults={movieResults} />
            
        )
    }
}

export default Discover