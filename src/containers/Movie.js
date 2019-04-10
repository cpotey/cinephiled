import React from 'react';
import { getMovie } from '../actions/index';

import history from '../actions/history';
import styled from 'styled-components';

import LeftSVG from '../assets/svg/left.svg';
import Placeholder from '../assets/svg/placeholder.jpg';

const Button = styled.a`
// background-color: #1b1b1b;
// color: #fff;
border-radius: 100px;
padding: 4px;
font-size: 0.8rem;
margin-right: 0.3rem;
padding: 5px 10px;
text-decoration: none;
border: 1px solid #1b1b1b;
color: #1b1b1b;
transition:.4s ease;

&:hover {
    background-color: #1b1b1b;
    color: #fff;
}
`;



class Movie extends React.Component {

    constructor(){
        super();
        this.state = {
            activeMovie: []
        }
        this.getMovie = getMovie.bind(this);
    }

    componentDidMount = () => {
        const movieID = this.props.match.params.id
        this.getMovie(movieID)
    }

   
    

    render() {

        const movie = this.state.activeMovie
        // console.log(movie)
        
        const MovieWrapper = styled.div`
            width: 100%;
            height: 100%;
            min-height: 92.5vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-image: radial-gradient(circle at 20% 50%,rgba(255, 255, 255, 0.98) 0%,rgba(255, 255, 255, 0.8) 100%);

            &:before {
                content: '';
                position: absolute;
                left: 0;
                right: 0;
                width: 100%;
                height: 100%;
                z-index: -1;
                display: block;
                // filter: opacity(0) grayscale(100%) contrast(130%);
                filter: opacity(100) grayscale(100%) contrast(130%);
                background-size: cover;
                background-repeat: no-repeat;
                background-position: 50% 50%;
                background-image: url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}');
                will-change: opacity;
                transition: filter 1s;
            }
           
        `;

        const Container = styled.div`
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            max-width: 1000px;
            margin: 0 auto;

            @media (max-width:1000px) {
                max-width: 90%;
            }
            @media (max-width:750px) {
                flex-direction: column;
            }
            

            &.return {
                position: absolute;
                left: 32px;
                max-width: 150px;

                #back {
                    cursor: pointer;
                }

                @media (max-width: 1300px) {
                    display:none;
                }
            }
        `;

        const MoviePosterContainer = styled.div`
            width: 100%;
            max-width: 40%;
            flex-basis: 40%;
            align-items: center;
            justify-content: center;
            display: flex;

            @media (max-width:750px) {
                // max-width: 100%;
                max-width: 45%;
                flex-basis: 100%;
                padding:2rem 0 0;
            }
            @media (max-width:500px) {
                max-width: 80%;
                flex-basis: 100%;
            }

            img {
                max-height: 100%;
                height: auto;
                object-fit: cover;
                max-width: 100%;
                box-shadow: 0rem 2rem 5rem rgba(0,0,0,0.25);
                border-radius: 0.8rem;
            }
        `;

        const MovieDetailsContainer = styled.div`
            width: 100%;
            max-width: 60%;
            
            // padding-top: 4rem;
            // flex-grow: 1;
            // flex-shrink: 1;
            flex-basis: 60%;
            // padding: 3rem;
            padding-left:3rem;

            @media (max-width:750px) {
                max-width: 100%;
                flex-basis: 100%;
                padding:2rem 0;
            }

        `;

        const MovieTitle = styled.h1`
            font-size: 2.5rem;
            margin-top: 0;
            margin-bottom: 0;
        `;

        const MovieSubtitle = styled.h3`
            color:#ff6f80;
            margin-top:0.6rem;
        `;

        const AdditionalInfo = styled.div`
            h4 {
                // color:#1b1b1b8f;
            }
            .budget {
                margin-bottom:0;
            }
            .revenue {
                margin-top:0.5rem;

                &.profit span {
                    color:#3dc018;

                }
                &.loss span {
                    color:red;
                }
            }
        `;

        const GenreWrapper = styled.div`
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            margin-bottom: 3rem;
            flex-wrap: wrap;

            .item {
                background-color: #1b1b1b;
                color: #fff;
                border-radius: 100px;
                padding: 4px;
                font-size: 0.8rem;
                margin-right: 0.3rem;
                padding: 5px 10px;
                margin-bottom: 0.5rem;

                &:last-of-type {
                    margin-right:0;
                }
            }
        `;

        const Overview = styled.div`


            h3 {
                margin-bottom:0rem;
            }
            p {
                margin-top:0.5rem;
            }
        `;

       

        return (

            <MovieWrapper>

                <Container className='return'>{renderBack()}</Container>
                <Container>

                    <MoviePosterContainer>
                        {getPoster(movie.poster_path,movie.title)}
                    </MoviePosterContainer>

                    <MovieDetailsContainer>
                        <MovieTitle>{movie.title}</MovieTitle>
                        <MovieSubtitle>{movie.tagline}</MovieSubtitle>
                        <AdditionalInfo>{hoursConvert(movie.runtime)} / {splitDate(movie.release_date)}</AdditionalInfo>
                        <Overview>
                            <h3>Overview</h3><p>{movie.overview}</p>
                        </Overview>
                        <AdditionalInfo>{profit(movie.budget, movie.revenue)}</AdditionalInfo>
                        <GenreWrapper>{displayGenres(movie.genres)}</GenreWrapper>
                        { movie.homepage ? <Button href={movie.homepage} target="_blank" rel="noopener noreferrer">View Site</Button> : ( "" )}
                        { movie.imdb_id ? <Button href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noopener noreferrer">View IMDB</Button> : ("") }
                    </MovieDetailsContainer>

                </Container>

            </MovieWrapper>
            
        )
    }
}



export default Movie


// show back button if user was pushed into page
function renderBack() {
    if (history.action === 'PUSH') {
      return (
        <div id="back" onClick={history.goBack}>
          <div title="Back"><img alt="Return to previous page" src={LeftSVG} /></div>
        </div>
      );
    }
}

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

// Run through the genres
function displayGenres(genres) {
    if(genres) {
        return genres.map(movie => (
            <div className="item" key={movie.id}>{movie.name}</div>
        ))
    }  
}

// Split the date into "Month Year"
function splitDate(fullDate) {
    if(fullDate) {
        const [yearNum, monthNum, dayNum] = fullDate.split("-")
        let FullDate = new Date(yearNum, monthNum - 1, dayNum)
        var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let monthNumber = FullDate.getMonth();
        return `${months[monthNumber]} ${yearNum}`
    }  
}

// Turn minutes into Hours/Mins
function hoursConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    if (rhours) {
        return `${rhours}h ${rminutes}m`;
    } else {
        return `${rminutes}m`;
    }
}
    
// If movie made profit, add a class
function profit(budget,revenue) {
    const budgetCSV = parseInt( budget ).toLocaleString()
    const revenueCSV = parseInt( revenue ).toLocaleString()
    if (revenue < budget) {
        return (
        <div>
            <h4 className="budget">Budget: ${budgetCSV}</h4>
            <h4 className="revenue loss">Total Revenue: <span>${revenueCSV}</span></h4>
        </div>
        )
    } else if (revenue === 0||budget ===0)  {
        return ""
    } else {
        return (
        <div>
            <h4 className="budget">Budget: ${budgetCSV}</h4>
            <h4 className="revenue profit">Total Revenue: <span>${revenueCSV}</span></h4>
        </div>
        )
    }
}

// function showButtons(homepage,imdb_id) {
//     if (homepage && imdb_id) {
//         return (
//             <Button href={homepage} target="_blank" rel="noopener noreferrer">View Site</Button>
//             <Button href={`https://www.imdb.com/title/${imdb_id}`} target="_blank" rel="noopener noreferrer">View IMDB</Button>
//         )
//     } 
// }