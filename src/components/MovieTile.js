import React from 'react';
import { Link } from "react-router-dom"

const MovieTile = (props) => {

    const movieData = props.data;
  
    return (
        <div id="movieTile">
            <Link to={{ 
                        pathname: `/movie/${movieData.id}`,
                        state: { movieID: movieData.id }
                }}>

                <img alt={`Poster for ${movieData.title}`} src={`https://image.tmdb.org/t/p/w300/${movieData.poster_path}`} onError={(e)=>{e.target.onerror = null; e.target.src="image_path_here"}}/>
                <h2>{movieData.title}</h2>

            </Link>
        </div>
    );

}
  
export default MovieTile;