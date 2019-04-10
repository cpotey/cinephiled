import React from 'react';
import { Link } from 'react-router-dom';

import LeftSVG from '../assets/svg/left.svg';
import RightSVG from '../assets/svg/right.svg';

import styled from 'styled-components';

const Button = styled.button`
// background-color: #1b1b1b;
// color: #fff;
border-radius: 100px;
padding: 4px;
font-size: 0.8rem;
padding: 5px 10px;
text-decoration: none;
border: 1px solid #1b1b1b;
color: #1b1b1b;
transition:.4s ease;
background-color:transparent;
cursor:pointer;
min-width: 110px;

img, span {
    vertical-align: middle;
}

&:hover {
    background-color: #efefef;
    color: #1b1b1b;
}
`;

const PaginationWrapper = styled.div`

padding: 1rem 0 3rem;
display: flex;
justify-content: space-around;

`;

const Pagination = ({ fullResult, scrollToMyRef }) => {

    const { page, total_pages } = fullResult;
  
    if (total_pages === 1) {
        return null;
    }

    // On first page, render page 2 button
    if (page < total_pages && page === 1) {
        return (
        <PaginationWrapper>
            <Link
            to={`${process.env.PUBLIC_URL}?page=${page + 1}`}
            onClick={() => scrollToMyRef()}
            >
                <Button className="next" title={`Page ${page + 1}`} ><span>Next</span><img alt="Next page button" src={RightSVG} /></Button>
            </Link>
        </PaginationWrapper>
        );
    }

     // There is a next and a previous page, render accordingly
    else if (page < total_pages) {
        return (
        <PaginationWrapper>
            <Link
            to={`${process.env.PUBLIC_URL}?page=${page - 1}`}
            onClick={() => scrollToMyRef()}
            >
                <Button className="prev" title={`Page ${page - 1}`} icon="arrow-left"><img alt="Previous page button" src={LeftSVG} /><span>Previous</span></Button> 
            </Link>
            <Link
            to={`${process.env.PUBLIC_URL}?page=${page + 1}`}
            onClick={() => scrollToMyRef()}
            >
                <Button className="next" title={`Page ${page + 1}`} icon="arrow-right"><span>Next</span><img alt="Next page button" src={RightSVG} /></Button>
            </Link>
        </PaginationWrapper>
        );
    }

    // Otherwise on last page of results
    else {
        return (
        <PaginationWrapper>
            <Link
            to={`${process.env.PUBLIC_URL}?page=${page - 1}`}
            onClick={() => scrollToMyRef()}
            >
            <Button className="prev" title={`Page ${page - 1}`} ><img alt="Previous page button" src={LeftSVG} /><span>Previous</span></Button>
            </Link>
        </PaginationWrapper>
        );
    }
}
  
export default Pagination;