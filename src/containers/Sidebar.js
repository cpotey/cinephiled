import React from 'react';
import { Link } from "react-router-dom"

import API from '../actions/api';

// import { getGenres } from '../actions/index';

const Sidebar = () => {




    function renderGenres(genres) {

        return genres.map(genre => (
          <Link
            to={`${process.env.PUBLIC_URL}/genres/${genre.name}`}
            key={genre.id}
          >
          {genre.name}
           
          </Link>
        ));

      }


return (

    <header id="header">
        <Link id="logo" to={process.env.PUBLIC_URL + '/'}>cine<span>philed</span></Link>
        {/* <div id="currentPage"><h1>Discover: <span>Thor</span></h1></div> */}
    </header>

);


}

export default Sidebar
