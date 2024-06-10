import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export const Hero = ({ movies }) => {
    const navigate = useNavigate();
    function reviews(movieId) {
        navigate(`/Reviews/${movieId}`);
    }
    return (
        <div className='movie-carousel-container'>
            <Carousel>
                {
                    movies && movies.length > 0 ? (
                        movies.map((movie) => {
                            return (
                                <Paper key={movie.id}>
                                    <div className='movie-card-container'>
                                        <div className='movie-card' style={{ "--img": `url(${movie.backdrops[0]})` }}>
                                            <div className="movie-detail">
                                                <div className="movie-poster">
                                                    <img src={movie.poster} alt={movie.title} />
                                                </div>
                                                <div className="movie-title">
                                                    <h4>{movie.title}</h4>
                                                </div>
                                                <div className='movie-button-container'>
                                                    <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                                        <div className="play-button-icon-container">
                                                            <FontAwesomeIcon className='play-button-icon'
                                                                icon={faCirclePlay}
                                                            />
                                                        </div>
                                                    </Link>
                                                    <div className="movie-review-button-container">
                                                        <Button variant="info" onClick={reviews(movie.imdbId)}>Reviews</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Paper>
                            )
                        })
                    ) : (
                        <p>Loading...</p>
                    )
                }
            </Carousel>
        </div>
    )
}
