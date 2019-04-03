import React from 'react';
import MovieTile from './MovieTile'
import Pagination from './Pagination'

const MoviesList = (props) => {

    const movieResults = props.movieResults.results;
    console.log(props.movieResults)
    const fullResult = props.movieResults;

    const scrollToMyRef = () => {
      window.scrollTo({
        top: (0, Element.current.offsetTop),
        behavior: 'smooth',
      });
    };

    return (

      <section id="wrapper">
      
        {movieResults ? (
          movieResults.map(movie => (
            <MovieTile key={movie.id} data={movie}/>
          ))
        ) : ( "" )}
        <Pagination fullResult={fullResult} scrollToMyRef={scrollToMyRef}/>

      </section>

    );
  // }
}
  
export default MoviesList;