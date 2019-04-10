import React from 'react';
import { Link } from "react-router-dom"

import Placeholder from '../assets/svg/placeholder.jpg';

const MovieTile = (props) => {
    
    const movieData = props.data;

    return (
        <div id="movieTile">
            <Link to={{ pathname: `/movie/${movieData.id}` }}>
               {getPoster(movieData.poster_path,movieData.title)}
                <div className="content">
                    <h2>{movieData.title}</h2>
                </div>
            </Link>
        </div>
    );

}
  
export default MovieTile;


// get the Poster
function getPoster(poster_path, title) {
    if(poster_path) {
        return (
            
            <img alt={`Poster for ${title}`} src={`https://image.tmdb.org/t/p/w780/${poster_path}`}/>
        )
    } else {
        return (
             <img alt={`Missing Poster for ${title}`} src={Placeholder} />
        )
    }
}