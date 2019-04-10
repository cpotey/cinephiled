import API from './api';
import React from 'react';

// import history from '../actions/history';

export const getMovie = function getMovie(query) {

    API.get(`/movie/${query}`)
    .then(response => {
        this.setState({
            activeMovie: response.data
        })
    })
    .catch(error => {
        console.log(error);
        return (
            <div id="error">
                <p>test</p>
            </div>
        )
    });

};


// export function searchMovies(query,page) {

//     console.log('do function')

//     API.get(`/search/movie`, {
//         params: {
//             query:query,
//             page: page,
//         },
//     })
//     .then(response => {

//         // this.setState({
//         //     searchResults: response.data
//         // })
//         console.log(`new search completed for '${query}'`)
//         return response.data;
        
        
//     })
//     .catch(error => {
//         console.log(error); 
//     });


// };

export function searchMovies(query,page) {
  
    return API
        .get(`/search/movie`, {
            params: {
                query:query,
                page: page,
            },
        })
        .then(response => {
            this.setState({
                searchResults: response.data
            })
            return response.data;
        })
        .catch(error => {
            console.error(error);
        });
}

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

