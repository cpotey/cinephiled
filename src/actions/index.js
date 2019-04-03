import API from './api';

export const getMovie = function getMovie(query) {

    API.get(`/movie/${query}`)
    .then(response => {
        this.setState({
            activeMovie: response.data
        })
        // console.log(this.state)
    })
    .catch(error => {
        console.log(error);
    });

    
};

export const searchMovies = function searchMovies(query,page) {

    API.get(`/search/movie`, {
        params: {
            query:query,
            page: page,
        },
    })
    .then(response => {

        this.setState({
            searchResults: response.data
        })
        
    })
    .catch(error => {
        console.log(error);
    });

};

export const discoverMovies = function discoverMovies(query,page) {

    API.get(`/discover/movie`, {
        params: {
            query:query,
            page: page,
        },
    })
    .then(response => {

        this.setState({
            searchResults: response.data
        })
        
    })
    .catch(error => {
        console.log(error);
    });

};
