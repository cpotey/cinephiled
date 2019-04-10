import React from 'react';
import { Link } from "react-router-dom"

import SearchForm from './SearchForm'

const SiteHeader = () => {





return (

    <header id="header">
        <Link id="logo" to={process.env.PUBLIC_URL + '/'}>cine<span>philed</span></Link>
        {/* <div id="currentPage"><h1>Discover: <span>Thor</span></h1></div> */}
        <SearchForm />
    </header>

);


}

export default SiteHeader
