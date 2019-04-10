import React from 'react';
import MovieTile from './MovieTile'
import Pagination from './Pagination'

const MoviesList = (props) => {

    const movieResults = props.movieResults.results;
    const fullResult = props.movieResults;
    const searchQuery = props.searchQuery;

    const scrollToMyRef = () => {
      window.scrollTo({
        top: (0, Element.current.offsetTop),
        behavior: 'smooth',
      });
    };

    return (

      <section key={searchQuery}>
        <div id="wrapper">
        {movieResults ? (
          movieResults.map(movie => (
            <MovieTile key={movie.id} data={movie}/>
          ))
        ) : ( "" )}
        </div>
        <Pagination key={searchQuery} fullResult={fullResult} scrollToMyRef={scrollToMyRef}/>
      </section>
      

    );
    
}
  
export default MoviesList;