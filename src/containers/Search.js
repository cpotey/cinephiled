import React from 'react';
import { searchMovies } from '../actions/index';
import MoviesList from '../components/MoviesList';
// import history from '../actions/history';

class Search extends React.Component {

    constructor(){
        super();
        this.state = {
            searchResults: [],
            searchQuery: ""
        }
        this.searchMovies = searchMovies.bind(this);
    }

    componentDidMount = () => {

        // const searchQuery = this.state.searchQuery

        // const movieResults =  this.state.searchResults
        // const query = this.props.match.params.query

        // let search = window.location.search;
        // let params = new URLSearchParams(search);
        // let page = params.get('page');

        // console.log("query = " +query)

        // this.searchMovies(query,page)

        // const movieResults =  this.state.searchResults

        // console.log(this)



            const query = this.props.match.params.query

            let search = window.location.search;
            let params = new URLSearchParams(search);
            let page = params.get('page');

            this.setState({
                searchQuery: query
            })

            this.searchMovies(query,page)
        

        // console.log(page)

        
    
    }

    // componentDidUpdate = (prevProps, prevState) => {

        

    //     // const query = this.props.match.params.query
    //     // let search = window.location.search;
    //     // let params = new URLSearchParams(search);
    //     // let page = params.get('page');
        
    //     // this.searchMovies(query,page).then(searchMovies => {
    //     //     // this.setState({ searchResults: searchMovies });
    //     //     // console.log('resolved')
    //     // });


    //     Object.entries(this.props).forEach(([key, val]) =>
    //       prevProps[key] !== val && console.log(`Prop '${key}' changed`)
    //     );
    //     Object.entries(this.state).forEach(([key, val]) =>
    //       prevState[key] !== val && console.log(`State '${key}' changed`)
    //     );

    // }


    render() {        

        return (
   
            <MoviesList 
            key={this.state.searchQuery} 
            searchQuery={this.state.searchQuery} 
            movieResults={this.state.searchResults} 
            />
            
        )
    }
}

export default Search