import React from 'react';
import { Hero } from '../hero/Hero';

export default const Home = ({ movies }) => {
    return (
        <Hero movies={movies} />
    )
}