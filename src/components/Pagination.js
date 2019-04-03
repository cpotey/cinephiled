import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ fullResult, scrollToMyRef }) => {

    const { page, total_pages } = fullResult;
    console.log(fullResult)
  
    if (total_pages === 1) {
        return null;
    }

    // On first page, render page 2 button
    if (page < total_pages && page === 1) {
        return (
        <div>
            <Link
            to={`${process.env.PUBLIC_URL}?page=${page + 1}`}
            onClick={() => scrollToMyRef()}
            >
                <button title={`Page ${page + 1}`} >Next One</button>
            </Link>
        </div>
        );
    }

     // There is a next and a previous page, render accordingly
    else if (page < total_pages) {
        return (
        <div>
            <Link
            to={`${process.env.PUBLIC_URL}?page=${page - 1}`}
            onClick={() => scrollToMyRef()}
            >
                <button   title={`Page ${page - 1}`} icon="arrow-left">Previous One</button> 
            </Link>
            <Link
            to={`${process.env.PUBLIC_URL}?page=${page + 1}`}
            onClick={() => scrollToMyRef()}
            >
                <button  title={`Page ${page + 1}`} icon="arrow-right">Next One</button>
            </Link>
        </div>
        );
    }

    // Otherwise on last page of results
    else {
        return (
        <div>
            <Link
            to={`${process.env.PUBLIC_URL}?page=${page - 1}`}
            onClick={() => scrollToMyRef()}
            >
            <button title={`Page ${page - 1}`} >Previous</button>
            </Link>
        </div>
        );
    }
}
  
export default Pagination;