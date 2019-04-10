import React from 'react';
import { Link } from "react-router-dom"

import SearchForm from './SearchForm'

const SiteHeader = () => {

return (

    <header id="header">
        <Link id="logo" to={process.env.PUBLIC_URL + '/'}>cine<span>philed</span><span className="dot">.</span></Link>
        <SearchForm />
    </header>

);


}

export default SiteHeader
